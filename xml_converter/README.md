# Python XML to React MUI Converter

This tool converts MiPlatform XML files to React Material UI components.

## Setup

1.  **Create a Virtual Environment** (Optional but recommended):
    ```bash
    python3 -m venv venv
    source venv/bin/activate  # On Windows: venv\Scripts\activate
    ```

2.  **Install Dependencies** (If any):
    ```bash
    pip install -r requirements.txt
    ```

## Usage

Run the script with the input XML file path:

```bash
python3 main.py path/to/input.xml
```

To save the output to a file:

```bash
python3 main.py path/to/input.xml -o path/to/output.tsx
```

## Offline Usage

To move this project to an offline environment:
1.  Copy the entire `xml_converter` folder.
2.  If external dependencies are added later, you will need to package them (e.g., using `pip download`). Currently, the script uses only the standard library.
