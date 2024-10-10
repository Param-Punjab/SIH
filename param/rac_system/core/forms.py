from django import forms

class CSVUploadForm(forms.Form):
    experts_file = forms.FileField(label='Upload Experts CSV')
    candidates_file = forms.FileField(label='Upload Candidates CSV')
