pipeline {
  agent any
  stages {
    stage('Cloud Build') {
      parallel {

        stage('Build functional') {
          agent {
            label 'primary'
          }
          steps {
            checkout scm
            googleCloudBuild(
              credentialsId: 'crisiscleanup-201303',
              source: local('.'),
              request: inline("""
steps:
- name: 'gcr.io/cloud-builders/docker'
  args: ['build',
         '--build-arg',
         'APP_ENV=functional',
         '-t', 'gcr.io/\$PROJECT_ID/ccu3-web:functional',
         '.']
- name: 'gcr.io/cloud-builders/docker'
  args: ['push', 'gcr.io/\$PROJECT_ID/ccu3-web:functional']
"""))
          }
        }
        /*
        stage('Build dev') {
          agent {
            label 'primary'
          }
          steps {
            checkout scm
            googleCloudBuild(
              credentialsId: 'crisiscleanup-201303',
              source: local('.'),
              request: inline("""
steps:
- name: 'gcr.io/cloud-builders/docker'
  args: ['build',
         '--build-arg',
         'APP_ENV=realdev',
         '-t', 'gcr.io/\$PROJECT_ID/ccu3-web:dev',
         '.']
- name: 'gcr.io/cloud-builders/docker'
  args: ['push', 'gcr.io/\$PROJECT_ID/ccu3-web:dev']
"""))
          }
        }
        */
      }
    }
  }
}
