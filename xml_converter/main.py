import argparse
import sys
import shutil
from pathlib import Path
from converter import XMLToReactConverter

def setup_arg_parser():
    parser = argparse.ArgumentParser(description='Bulk convert MiPlatform XML to React MVC components.')
    parser.add_argument('input_path', help='Path to the input directory')
    parser.add_argument('--output', '-o', help='Path to the output directory', required=True)
    parser.add_argument('--clean', action='store_true', help='Clean the output directory before generating')
    parser.add_argument('--include', nargs='+', help='List of subdirectories to include (e.g., cust mem)', default=None)
    return parser

def main():
    parser = setup_arg_parser()
    args = parser.parse_args()
    
    input_path = Path(args.input_path)
    output_path = Path(args.output)
    
    if not input_path.exists():
        print(f"Error: Input path '{input_path}' does not exist.")
        sys.exit(1)

    if args.clean and output_path.exists():
        print(f"Cleaning output directory: {output_path}")
        shutil.rmtree(output_path)
        
    converter = XMLToReactConverter(output_path)
    
    if input_path.is_dir():
        converter.convert_directory(input_path, whitelist=args.include)
    elif input_path.is_file():
        converter.process_file(input_path, output_path)
        converter.generate_menu_file()
    else:
        print("Please provide a directory or file for conversion.")
        sys.exit(1)

if __name__ == '__main__':
    main()
