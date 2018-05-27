pipeline {
  agent {
    kubernetes {
      label "mypod-${UUID.randomUUID().toString()}"
      defaultContainer 'node'
      yaml """
apiVersion: v1
kind: Pod
spec:
  containers:
  - name: nodejs
    image: node:9
    command:
    - cat
    tty: true
    volumeMounts:
      - mountPath: /home/node
      name: node-storage
  volumes:
  - name: node-storage
    persistentVolumeClaim:
      claimName: node-pvc
"""
    }
  }
  stages {
    stage('Build and test') {
      steps {
        container('nodejs') {
          checkout scm
          sh 'pwd'
          sh 'yarn install'
          sh 'ls -alh'
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

