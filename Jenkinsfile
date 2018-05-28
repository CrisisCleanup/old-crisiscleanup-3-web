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
    stage('Build and unit test') {
      when {
        expression { BRANCH_NAME ==~ /(feature\/*|development|jenkins)/ }
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
      when {
        expression { BRANCH_NAME ==~ /(feature\/*|development|jenkins)/ }
      }
      steps {
        build(job: 'crisiscleanup-web-build',
          parameters: [
            string(name: 'upstreamBranch', value: "${env.BRANCH_NAME}"),
            string(name: 'deployEnv', value: 'functionalci')
          ],
          propagate: true,
          wait: true)
      }
    }
    stage('Functional environment test') {
      when {
        expression { BRANCH_NAME ==~ /(feature\/*|development|jenkins)/ }
      }
      steps {
        build(job: 'crisiscleanup-functional-tests',
          parameters: [string(name: 'upstreamBranch', value: "${env.BRANCH_NAME}")],
          propagate: true,
          wait: true)
      }
    }
    stage('Build for dev') {
      when {
        expression { BRANCH_NAME ==~ /(feature\/*|development|jenkins)/ }
      }
      steps {
        build(job: 'crisiscleanup-web-build',
          parameters: [
            string(name: 'upstreamBranch', value: "${env.BRANCH_NAME}"),
            string(name: 'deployEnv', value: 'realdev')
          ],
          propagate: true,
          wait: true)
      }
    }
    stage('Deploy to dev') {
      when {
        expression { BRANCH_NAME ==~ /(feature\/*|development|jenkins)/ }
      }
      steps {
        build(job: 'crisiscleanup-web-deploy',
          parameters: [
            string(name: 'deployEnv', value: "realdev")
          ],
          propagate: true,
          wait: true)
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

