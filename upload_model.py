from huggingface_hub import HfApi

api = HfApi()

api.upload_folder(
    folder_path="saved_summary_model",
    repo_id="rajnikant17/text-summary-model",   # Change if your username/repo is different
    repo_type="model"
)

print("✅ Model uploaded successfully!")