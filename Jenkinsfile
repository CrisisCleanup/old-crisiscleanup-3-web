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
      when {
        expression { BRANCH_NAME == ~/(feature\/*|jenkins)/ }
//        anyOf {
//          branch 'master'; branch 'staging'
//        }
      }
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
    stage('Functional environment build') {
      parallel {
        stage('Build functional') {
          when {
            expression { BRANCH_NAME == ~/(feature\/*|jenkins)/ }
          }
          steps {
            container('nodejs') {
              sh 'APP_ENV=functionalci yarn run build'
              sh 'mkdir dist-functionalci/'
              sh 'cp ./Dockerfile-nginx default.conf ./dist-functionalci/'
              sh 'cp -rp ./dist/* ./dist-functionalci/'
            }
            container('jnlp') {
              googleCloudBuild(
                credentialsId: 'crisiscleanup-201303',
                source: local('dist-functionalci'),
                substitutions: [
                  _APP_ENV: 'functionalci'
                ],
                request: file('cloudbuild-nginx.yaml'))
            }
            build(job: 'crisiscleanup-jenkins-functional',
              parameters: [string(name: 'upstreamBranch', value: ${env.BRANCH_NAME})],
              wait: false)
          }
        }
      }
    }
  }
  post {
    always {
      junit 'report-unit.xml'
    }
    success {
      slackSend(color: "good", message: "SUCCESS: ${env.JOB_NAME} ${env.BUILD_NUMBER} (<${env.BUILD_URL}|Open>)")
    }
    failure {
      slackSend(color: "danger", message: "FAILED: ${env.JOB_NAME} ${env.BUILD_NUMBER} (<${env.BUILD_URL}|Open>)")
    }
    unstable {
      slackSend(color: "warn", message: "UNSTABLE: ${env.JOB_NAME} ${env.BUILD_NUMBER} (<${env.BUILD_URL}|Open>)")
    }
  }
}

