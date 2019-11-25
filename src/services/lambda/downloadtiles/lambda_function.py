import boto3
import os
import random 
import string

'''
This lambda handler submits a job to a AWS Batch queue.
JobQueue, and JobDefinition environment variables must be set. 
These environment variables are intended to be set to the Name, not the Arn. 
'''
def lambda_handler(event,context):
    print("Started handler")