@echo off
python -m venv .venv
call .venv/Scripts/activate
pip install -r requirements-win.txt
npm install
echo Development environment setup complete!