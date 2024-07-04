# XGANArt

Welcome to the XGANArt project repository! This project is a part of a Bachelor’s thesis at the IT University of Copenhagen, aiming to enhance the transparency and explainability of Generative Adversarial Networks (GANs) through the development of the XGANArt interface. The project builds upon the foundational work of the GANPaint project by Bau et al., 2018.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [Authors](#authors)
- [Acknowledgments](#acknowledgments)
- [License](#license)

## Introduction

Generative Adversarial Networks (GANs) are powerful tools for generating realistic images but often operate as "black boxes" due to their opaque inner workings. The XGANArt project aims to address this challenge by providing an interface that exposes the hidden layers of a GAN, allowing users to interact with and understand the inner mechanisms of these models.

XGANArt enhances the GANPaint interface to offer more comprehensive insights into the generative process, thereby fostering better human-AI interaction and co-creativity.

## Features

- **Interactive Interface**: Allows users to explore and manipulate different layers of a GAN.
- **Explainability**: Exposes the inner workings of GANs to help users understand the image generation process.
- **Visualization**: Provides visual feedback on how changes in neuron activations affect generated images.
- **XAI Integration**: Utilizes methods from explainable AI (XAI) to enhance user comprehension.

## Installation

To install and run the XGANArt application, you need to have Docker installed on your system. Follow the steps below to set up the environment:

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/XGANArt.git
    cd XGANArt
    ```

2. Build the Docker image:
    ```bash
    docker build -t xganart .
    ```

3. Run the Docker container:
    ```bash
    docker run -p 8000:8000 xganart
    ```

4. Access the application in your web browser at `http://localhost:8000`.

## Usage

Once the application is running, you can start exploring the GAN model by interacting with the interface. Here are some key functionalities:

- **Layer Selection**: Choose different layers of the GAN to explore their features.
- **Feature Manipulation**: Use sliders and drawing tools to manipulate specific features and observe changes in real-time.
- **Tool-tips**: Hover over elements to get more detailed explanations of their functions.

## Project Structure

The repository is organized as follows:

```
XGANArt/
│
├── netdissect/
│   ├── server.py          # Controller handling API requests
│   ├── serverstate.py     # Model handling data logic
│   └── GanPaintView.py    # View for drawing and sliders
│
├── docker/
│   ├── Dockerfile         # Docker configuration file
│
├── static/
│   ├── css/               # CSS files
│   ├── js/                # JavaScript files
│   └── images/            # Images used in the interface
│
├── templates/
│   ├── index.html         # Main HTML file
│
└── README.md              # This README file
```

## Contributing

We welcome contributions to enhance the XGANArt project! To contribute, please fork the repository and create a pull request with your changes. Ensure that your code follows the existing style and includes appropriate tests.

## Authors

- Anne-Marie Rommerdahl - [annro@itu.dk](mailto:annro@itu.dk)
- Daria Damian - [dard@itu.dk](mailto:dard@itu.dk)
- Ida Barkou Vilstrup - [ivil@itu.dk](mailto:ivil@itu.dk)

Supervised by:
- Djordje Grbic - [djgr@itu.dk](mailto:djgr@itu.dk)
- Imke Grabe - [imgr@itu.dk](mailto:imgr@itu.dk)
- Louie Søs Meyer - [lomm@itu.dk](mailto:lomm@itu.dk)

## Acknowledgments

This project is based on the GANDissect project and the GANPaint interface. We extend our gratitude to the authors of these foundational works for their valuable contributions to the field.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

Source code from:
https://github.com/CSAILVision/gandissect

---
## More about how to run the project

To run this project, a CUDA-enabled GPU as well as some disk space is required. 

A dissection must be run (see commands later in this file) to acquire the necessary data to run the project, as this data is too large to be stored on GitHub.

First navigate to the gandissect/gandissect-master and run the following commands:
script/make_dirs.sh      # Create the dataset and dissect directories
script/download_data.sh  # Download support data and demo GANs

To run this code you must also install Docker.

Follow the instructions in the Dockerfile placed in the gandissect/gandissect-master folder, then use the Dockerfile to create the Docker image.

Open a WSL terminal.
Navigate to your gandissect/gandissect-master folder

Run docker container:
 docker run --rm -p=5001:5001 --gpus=all --cpus=6 --memory=12g -it --init --volume="$PWD:/app" blackbox

To dissect a GAN:
 python3 -m netdissect --gan --model "netdissect.proggan.from_pth_file('models/karras/churchoutdoor_lsun.pth')" --outdir "dissect/churchoutdoor" --layer layer4 layer7 layer10 --size 1000
This will dissect 'churchoutdoor'. 

 Running a GAN editing server (alpha)
 python3 -m netdissect.server --address 0.0.0.0

 The website is hosted at [http://localhost:5001/client/newfrontpage.html](http://localhost:5001/client/newfrontpage.html) which serves as the front page for the project

 To see the original GANPaint interface as implemented by the MIT-IBM Watson AI Lab, we refer to [https://ganpaint-v2.vizhub.ai](https://ganpaint-v2.vizhub.ai)
