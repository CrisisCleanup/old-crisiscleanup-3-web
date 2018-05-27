pipeline {
  agent none
  stages {
    stage('Build and test') {
      parallel {
        stage('Build functional') {
          agent {
            kubernetes {
              label 'nodepod'
              defaultContainer 'node'
              yaml """
apiVersion: v1
kind: Pod
metadata:
  labels:
    test: ci 
spec:
  containers:
  - name: node
    image: node:9
    command:
    - cat
    tty: true
"""
              steps {
                checkout scm
                sh 'yarn install'
                sh 'yarn run unit'
              }
            }
          }
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
                    substitutions: [
                      _APP_ENV: 'functionalci'
                    ],
                    request: file('cloudbuild-buildonly.yaml'))
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
                    substitutions: [
                      _APP_ENV: realdev
                    ],
                    request: file('cloudbuild-buildonly.yaml'))
                }
              }
              */
            }
          }
        }
      }
    }
  }
}
