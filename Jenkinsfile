pipeline {
  agent {
    kubernetes {
      label 'mypod'
      defaultContainer 'jnlp'
      yaml """
apiVersion: v1
kind: Pod
metadata:
  labels:
    some-label: some-label-value
spec:
  containers:
  - name: nodejs
    image: node:9
    command:
    - cat
    tty: true
    volumeMounts:
      - mountPath: /app
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
          sh 'mkdir -p /app/node_modules && cp -rp /app/node_modules ./ && chmod 777 -R ./node_modules'
          sh 'yarn install'
          sh 'yarn run unit'
          sh 'cp -rp ./node_modules /app/'
        }
      }
    }
    stage('Cloud Build') {
      parallel {
        stage('Build functional') {
          steps {
            container('nodejs') {
              // FUNCTIONALCI
              sh 'APP_ENV=functionalci yarn run build'
//              archiveArtifacts artifacts: './dist/'
            }
            container('jnlp') {
              googleCloudBuild(
                credentialsId: 'crisiscleanup-201303',
                source: local('dist'),
                request: file('cloudbuild-nginx.yaml'))
            }

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
    post {
      always {
        archieve
      }
    }
  }
}

