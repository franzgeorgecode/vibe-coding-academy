#!/usr/bin/env python3
"""
Extract all quiz questions from translations.ts
"""
import re

def extract_all_questions():
    """Extract all quiz questions from the translations file"""
    with open('/home/geo/VibeCodingAcademy/src/data/translations.ts', 'r') as f:
        content = f.read()
    
    # Find all quiz question blocks
    # Look for pattern: 'q1-2-3': { question: '...', options: [...], explanation: '...' }
    pattern = r"'(q\d+-\d+-\d+)':\s*{\s*question:\s*'([^']+)',\s*options:\s*\[(.*?)\],\s*explanation:"
    matches = re.findall(pattern, content, re.DOTALL)
    
    questions = {}
    for q_id, question_text, options_text in matches:
        # Extract options
        options = re.findall(r"'([^']+)'", options_text)
        questions[q_id] = {
            'question': question_text,
            'options': options,
            'num_options': len(options)
        }
    
    return questions

def extract_lesson_answers():
    """Extract answers from lessonsData.ts"""
    with open('/home/geo/VibeCodingAcademy/src/data/lessonsData.ts', 'r') as f:
        content = f.read()
    
    # Find all quiz questions with their correct answers
    pattern = r'{\s*id:\s*"(q\d+-\d+-\d+)",\s*correctAnswer:\s*(\d+),\s*numberOfOptions:\s*(\d+)\s*}'
    matches = re.findall(pattern, content)
    
    answers = {}
    for q_id, correct_answer, num_options in matches:
        answers[q_id] = {
            'correctAnswer': int(correct_answer),
            'numberOfOptions': int(num_options)
        }
    
    return answers

def main():
    questions = extract_all_questions()
    answers = extract_lesson_answers()
    
    print(f"Found {len(questions)} questions in translations.ts")
    print(f"Found {len(answers)} answers in lessonsData.ts")
    
    # Organize by lesson
    lessons = {}
    for q_id in questions.keys():
        lesson_id = '-'.join(q_id.split('-')[:-1])
        if lesson_id not in lessons:
            lessons[lesson_id] = []
        lessons[lesson_id].append(q_id)
    
    # Print all questions by lesson
    for lesson_id in sorted(lessons.keys()):
        print(f"\n=== LESSON {lesson_id} ===")
        for q_id in sorted(lessons[lesson_id]):
            q_data = questions[q_id]
            a_data = answers.get(q_id, {})
            
            print(f"\n{q_id}:")
            print(f"  Question: {q_data['question']}")
            print(f"  Options ({len(q_data['options'])}):")
            for i, option in enumerate(q_data['options']):
                marker = "✅" if a_data.get('correctAnswer') == i else "  "
                print(f"  {marker} {i}: {option}")
            
            if q_id in answers:
                correct_idx = a_data['correctAnswer']
                if correct_idx < len(q_data['options']):
                    print(f"  Current Answer: {correct_idx} - {q_data['options'][correct_idx]}")
                else:
                    print(f"  ERROR: Invalid answer index {correct_idx} for {len(q_data['options'])} options")
            else:
                print(f"  ERROR: No answer found in lessonsData.ts")

if __name__ == "__main__":
    main()