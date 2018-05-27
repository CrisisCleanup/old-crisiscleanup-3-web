pipeline {
  agent none
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
