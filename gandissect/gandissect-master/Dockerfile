#Follow Djordje's instructions in the emails
#You must pull a specific image. Run this command:
#docker pull pytorch/pytorch:2.2.0-cuda12.1-cudnn8-devel
#Make sure you have enough space on your computer! (18 GB ish)
#Then create image from this Dockerfile

#We have to use devel (developer), as it has compiler configured correctly
FROM pytorch/pytorch:2.2.0-cuda12.1-cudnn8-devel

#Unsure if needed:
EXPOSE 5001 

#Install
RUN pip3 install matplotlib

RUN pip3 install scikit-image==0.19.3

RUN pip3 install scipy==1.11

RUN pip3 install Pillow

RUN pip3 install IPython

RUN pip3 install Ninja

RUN pip3 install numpy==1.21.6

RUN pip3 install flask-cors

RUN pip3 install "connexion[flask]"

RUN pip3 install "connexion[uvicorn]"

RUN pip3 install "connexion[swagger-ui]"

#Create a working directory.
RUN mkdir /app
WORKDIR /app

# Updated commands (worked for Anne in WSL)
# FIRST!!! From terminal, navigate to your gandissect/gandissect-master folder
# Run docker container:
# docker run --rm -p=5001:5001 --gpus=all --cpus=6 --memory=12g -it --init --volume="$PWD:/app" blackbox

# Dissect a GAN:
# python3 -m netdissect --gan --model "netdissect.proggan.from_pth_file('models/karras/livingroom_lsun.pth')" --outdir "dissect/livingroom" --layer layer1 layer4 layer7 --size 1000

# Running a GAN editing server (alpha)
# python3 -m netdissect.server --address 0.0.0.0

# Site can be accessed at:
# http://localhost:5001