#!/usr/bin/env python3
"""
Systematic Quiz Verification Tool
Verifies that all quiz answers in lessonsData.ts match the correct options in translations.ts
"""

import re
import json

def extract_questions_from_translations(file_path):
    """Extract all quiz questions and options from translations.ts"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find the English section - look for more specific pattern
    english_match = re.search(r'en:\s*{.*?quizQuestions:\s*{(.*?)}\s*}', content, re.DOTALL)
    if not english_match:
        return {}
    
    quiz_content = english_match.group(1)
    
    # More precise pattern to extract questions
    # Look for each question block individually
    question_pattern = r"'(q\d+-\d+-\d+)':\s*{[^}]*?options:\s*\[(.*?)\][^}]*?}"
    questions = re.findall(question_pattern, quiz_content, re.DOTALL)
    
    result = {}
    for q_id, options in questions:
        # Extract options more carefully
        options_text = options.strip()
        options_list = []
        
        # Find all quoted strings in options
        option_matches = re.findall(r"'([^']*)'", options_text)
        options_list = option_matches
        
        result[q_id] = options_list
    
    return result

def extract_answers_from_lessons_data(file_path):
    """Extract all quiz answers from lessonsData.ts"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find all quiz questions with their correct answers
    pattern = r'{\s*id:\s*"(q\d+-\d+-\d+)",\s*correctAnswer:\s*(\d+),\s*numberOfOptions:\s*(\d+)\s*}'
    matches = re.findall(pattern, content)
    
    result = {}
    for q_id, correct_answer, num_options in matches:
        result[q_id] = {
            'correctAnswer': int(correct_answer),
            'numberOfOptions': int(num_options)
        }
    
    return result

def verify_quiz_consistency():
    """Main verification function"""
    print("🔍 SYSTEMATIC QUIZ VERIFICATION REPORT")
    print("=" * 60)
    
    # Extract data
    questions = extract_questions_from_translations('/home/geo/VibeCodingAcademy/src/data/translations.ts')
    answers = extract_answers_from_lessons_data('/home/geo/VibeCodingAcademy/src/data/lessonsData.ts')
    
    discrepancies = []
    verified_correct = []
    
    # Verify each question
    for q_id in sorted(questions.keys()):
        if q_id not in answers:
            discrepancies.append({
                'question_id': q_id,
                'issue': 'Missing in lessonsData.ts',
                'description': f'Question {q_id} exists in translations but not in lessonsData'
            })
            continue
        
        options = questions[q_id]
        answer_data = answers[q_id]
        correct_index = answer_data['correctAnswer']
        
        # Check if correct answer index is valid
        if correct_index >= len(options):
            discrepancies.append({
                'question_id': q_id,
                'issue': 'Invalid correct answer index',
                'current_index': correct_index,
                'max_valid_index': len(options) - 1,
                'options': options,
                'description': f'Correct answer index {correct_index} is out of range for {len(options)} options'
            })
            continue
        
        # Check if number of options matches
        if answer_data['numberOfOptions'] != len(options):
            discrepancies.append({
                'question_id': q_id,
                'issue': 'Option count mismatch',
                'declared_count': answer_data['numberOfOptions'],
                'actual_count': len(options),
                'description': f'Declared {answer_data["numberOfOptions"]} options but found {len(options)}'
            })
        
        # Display question info
        print(f"\n📝 {q_id}:")
        print(f"   Options ({len(options)}):")
        for i, option in enumerate(options):
            marker = "✅" if i == correct_index else "  "
            print(f"   {marker} {i}: {option}")
        print(f"   Current Answer: {correct_index} - {options[correct_index] if correct_index < len(options) else 'INVALID'}")
        
        if correct_index < len(options):
            verified_correct.append(q_id)
    
    # Summary
    print("\n" + "=" * 60)
    print("📊 SUMMARY")
    print("=" * 60)
    print(f"✅ Total questions verified: {len(questions)}")
    print(f"✅ Questions with valid answers: {len(verified_correct)}")
    print(f"❌ Discrepancies found: {len(discrepancies)}")
    
    if discrepancies:
        print("\n🚨 DISCREPANCIES FOUND:")
        print("-" * 40)
        for i, disc in enumerate(discrepancies, 1):
            print(f"{i}. {disc['question_id']}: {disc['issue']}")
            print(f"   {disc['description']}")
            if 'current_index' in disc:
                print(f"   Current index: {disc['current_index']}")
            if 'options' in disc:
                print(f"   Available options: {disc['options']}")
            print()
    
    return discrepancies

if __name__ == "__main__":
    discrepancies = verify_quiz_consistency()
    
    if discrepancies:
        print(f"\n⚠️  Found {len(discrepancies)} issues that need to be fixed!")
        exit(1)
    else:
        print("\n🎉 All quiz questions verified successfully!")
        exit(0)