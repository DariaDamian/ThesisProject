# Blackbox

Source code from:
https://github.com/CSAILVision/gandissect

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