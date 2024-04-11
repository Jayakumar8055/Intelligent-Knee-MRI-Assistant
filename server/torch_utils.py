import io
import torch
import torch.nn as nn
from torchvision import models
import numpy as np


# model paths


model_acl_axial_path = 'model/ACL_axial.pt'
model_men_axial_path = 'model/MENISCUS_axial.pt'
model_abn_axial_path = 'model/ABNORMAL_axial.pt'
model_acl_cor_path =  'model/ACL_coronal.pt'
model_men_cor_path =  'model/MENISCUS_coronal.pt'
model_abn_cor_path =  'model/ABNORMAL_coronal.pt'
model_acl_sag_path = 'model/ACL_sagittal.pt'
model_men_sag_path = 'model/MENISCUS_sagittal.pt'
model_abn_sag_path = 'model/ABNORMAL_sagittal.pt'




# Load the model on the CPU
model_acl_axial = torch.jit.load(model_acl_axial_path, map_location=torch.device('cpu'))
model_men_axial=torch.jit.load(model_men_axial_path, map_location=torch.device('cpu'))
model_abn_axial=torch.jit.load(model_abn_axial_path, map_location=torch.device('cpu'))
model_acl_cor=torch.jit.load(model_acl_cor_path, map_location=torch.device('cpu'))
model_men_cor=torch.jit.load(model_men_cor_path, map_location=torch.device('cpu'))
model_abn_cor=torch.jit.load(model_abn_cor_path, map_location=torch.device('cpu'))
model_acl_sag=torch.jit.load(model_acl_sag_path, map_location=torch.device('cpu'))
model_men_sag=torch.jit.load(model_men_sag_path, map_location=torch.device('cpu'))
model_abn_sag=torch.jit.load(model_abn_sag_path, map_location=torch.device('cpu'))


# Set the model to evaluation mode


model_acl_axial.eval()
model_men_axial.eval()
model_abn_axial.eval()
model_acl_cor.eval()
model_men_cor.eval()
model_abn_cor.eval()
model_acl_sag.eval()
model_men_sag.eval()
model_abn_sag.eval()


def get_prediction_axial(axial_npy):

 
 axial_npy = np.stack((axial_npy,)*3, axis=1)
 axial_npy= torch.FloatTensor(axial_npy)
 prediction_acl_axial= model_acl_axial(axial_npy.float())
 prediction_men_axial=model_men_axial(axial_npy.float())
 prediction_abn_axial=model_abn_axial(axial_npy.float())
 prediction_acl_axial_sig=torch.sigmoid(prediction_acl_axial)
 prediction_men_axial_sig=torch.sigmoid(prediction_men_axial)
 prediction_abn_axial_sig=torch.sigmoid(prediction_abn_axial)
 
 prob_of_1_acl=prediction_acl_axial_sig[:, 1].item()*100
 prob_of_1_acl_trun=int(prob_of_1_acl* 1000) / 1000

  
 prob_of_1_men=prediction_men_axial_sig[:, 1].item()*100
 prob_of_1_men_trun=int(prob_of_1_men* 1000) / 1000

  
 prob_of_1_abn=prediction_abn_axial_sig[:, 1].item()*100
 prob_of_1_abn_trun=int(prob_of_1_abn* 1000) / 1000
 return prob_of_1_acl_trun,prob_of_1_men_trun,prob_of_1_abn_trun


def get_prediction_cor(coronal_npy):

 
 coronal_npy = np.stack((coronal_npy,)*3, axis=1)
 coronal_npy= torch.FloatTensor(coronal_npy)
 prediction_acl_cor= model_acl_cor(coronal_npy.float())
 prediction_men_cor=model_men_cor(coronal_npy.float())
 prediction_abn_cor=model_abn_cor(coronal_npy.float())
 prediction_acl_cor_sig=torch.sigmoid(prediction_acl_cor)
 prediction_men_cor_sig=torch.sigmoid(prediction_men_cor)
 prediction_abn_cor_sig=torch.sigmoid(prediction_abn_cor)
 
 prob_of_1_acl=prediction_acl_cor_sig[:, 1].item()*100
 prob_of_1_acl_trun=int(prob_of_1_acl* 1000) / 1000

  
 prob_of_1_men=prediction_men_cor_sig[:, 1].item()*100
 prob_of_1_men_trun=int(prob_of_1_men* 1000) / 1000

  
 prob_of_1_abn=prediction_abn_cor_sig[:, 1].item()*100
 prob_of_1_abn_trun=int(prob_of_1_abn* 1000) / 1000
 return prob_of_1_acl_trun,prob_of_1_men_trun,prob_of_1_abn_trun


def get_prediction_sag(sagittal_npy):

 
 sagittal_npy= np.stack((sagittal_npy,)*3, axis=1)
 sagittal_npy= torch.FloatTensor(sagittal_npy)
 prediction_acl_sag= model_acl_sag(sagittal_npy.float())
 prediction_men_sag=model_men_sag(sagittal_npy.float())
 prediction_abn_sag=model_abn_sag(sagittal_npy.float())
 prediction_acl_sag_sig=torch.sigmoid(prediction_acl_sag)
 prediction_men_sag_sig=torch.sigmoid(prediction_men_sag)
 prediction_abn_sag_sig=torch.sigmoid(prediction_abn_sag)
 
 prob_of_1_acl=prediction_acl_sag_sig[:, 1].item()*100
 prob_of_1_acl_trun=int(prob_of_1_acl* 1000) / 1000

  
 prob_of_1_men=prediction_men_sag_sig[:, 1].item()*100
 prob_of_1_men_trun=int(prob_of_1_men* 1000) / 1000

  
 prob_of_1_abn=prediction_abn_sag_sig[:, 1].item()*100
 prob_of_1_abn_trun=int(prob_of_1_abn* 1000) / 1000
 return prob_of_1_acl_trun,prob_of_1_men_trun,prob_of_1_abn_trun






