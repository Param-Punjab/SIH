import pandas as pd
from django.shortcuts import render
from .forms import CSVUploadForm

def match_experts(request):
    if request.method == 'POST':
        form = CSVUploadForm(request.POST, request.FILES)

        if form.is_valid():
            experts_file = form.cleaned_data['experts_file']
            candidates_file = form.cleaned_data['candidates_file']

            # Read the CSV files
            experts_df = pd.read_csv(experts_file)
            candidates_df = pd.read_csv(candidates_file)

            # Matching logic (simple expertise matching)
            results = []
            for _, candidate in candidates_df.iterrows():
                candidate_expertise = candidate['expertise']
                best_match = None
                max_score = 0
                
                for _, expert in experts_df.iterrows():
                    expert_expertise = expert['expertise']
                    if candidate_expertise.lower() in expert_expertise.lower():
                        best_match = expert['name']
                        break
                
                results.append({'candidate': candidate['name'], 'best_expert': best_match})
            
            return render(request, 'match_results.html', {'results': results})

    else:
        form = CSVUploadForm()

    return render(request, 'upload_csv.html', {'form': form})
