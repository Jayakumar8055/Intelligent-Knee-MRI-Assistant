# Automated Knee MRI Interpretation and Diagnosis System

Our system leverages deep learning methods to automatically interpret and classify knee MRI images, aiding clinicians in prioritizing high-risk patients and making accurate diagnoses.

## KEY FEATURES:

- Utilizes deep learning models trained on a dataset from Stanford University to interpret knee MRI images.
- React.js frontend for user-friendly interaction, with a separate portal for doctors and patients.
- Python backend powered by Flask, PyTorch, TensorFlow, and MongoDB for efficient data processing and storage.
- Docker containerization for easy deployment and scalability.
- Radiologist panel allows input of patient ABHA Number, retrieving patient details and facilitating MRI image upload.
- Upon image upload, the system generates predictions using PyTorch models tailored for ACL, Meniscus, and Abnormality detection across axial, coronal, and sagittal planes.
- Predictions are compiled into comprehensive reports alongside patient details, streamlining the diagnosis process and enhancing documentation.

## PRE-TRAINED MACHINE LEARNING MODELS

Please note that the pre-trained machine learning models used in this project are not included in the GitHub repository due to their large file sizes. However, you can obtain these models separately from the following location:

[Pre-trained models repository](https://github.com/ahmedbesbes/mrnet)

Once downloaded, place the model files in the `models` directory of the project to use them for inference.

## RELATED WORKS

I would also like to thank great works as follows:

- [AdaptSegNet](https://github.com/wasidennis/AdaptSegNet)
- [CLAN](https://github.com/RoyalVane/CLAN)
- [CRST](https://github.com/yzou2/CRST)
- [MRNet project by Stanford ML Group](https://stanfordmlgroup.github.io/projects/mrnet/)

## CONTRIBUTORS

If you feel that some functionalities or improvements could be added to the project, don't hesitate to submit a pull request.

## LICENSE

This project is licensed under the [MIT License](LICENSE).

## Topics

computer-vision, deep-learning, acl, cnn, pytorch, medical-imaging, stanford, convolutional-neural-networks, transfer-learning, mri-images, data-augmentation, tears, pytorch-tutorial, paper-implementations, mri-applications, stanford-ml-group, mrnet, knee-injuries, mri-exams, sagittal-plane
