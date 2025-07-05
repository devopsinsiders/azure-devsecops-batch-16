import streamlit as st
from pathlib import Path
from PIL import Image
import os

# Folder to save uploaded images
PHOTOS_DIR = Path("photos")
PHOTOS_DIR.mkdir(exist_ok=True)

st.set_page_config(page_title="Photo Uploader", layout="wide")
st.title("📷 Simple Photo Upload & Gallery App")

# Upload section
uploaded_files = st.file_uploader(
    "Upload one or more images", type=["png", "jpg", "jpeg"], accept_multiple_files=True
)

# Save uploaded files
if uploaded_files:
    for uploaded_file in uploaded_files:
        file_path = PHOTOS_DIR / uploaded_file.name
        with open(file_path, "wb") as f:
            f.write(uploaded_file.getbuffer())
    st.success("Images uploaded successfully!")

# Display all images in grid
st.subheader("📁 Photo Gallery")

image_files = list(PHOTOS_DIR.glob("*"))

if image_files:
    cols = st.columns(4)  # 4-column grid
    for i, image_path in enumerate(image_files):
        with cols[i % 4]:
            img = Image.open(image_path)
            st.image(img, caption=image_path.name, use_container_width=True)
else:
    st.info("No photos found in the /photos folder.")

