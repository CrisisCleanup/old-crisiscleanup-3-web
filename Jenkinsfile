pipeline {
  agent {
    kubernetes {
      label 'jenkins-web'
      defaultContainer 'jnlp'
    }
  }
  stages {
    stage('Build and unit test') {
      steps {
        build(job: 'crisiscleanup-web-unit',
          parameters: [
            string(name: 'upstreamBranch', value: "${env.BRANCH_NAME}")
          ],
          propagate: true,
          wait: true)
        slackSend(color: "good", message: "UNIT TESTS PASSED: ${env.JOB_NAME} ${env.BUILD_NUMBER} (<${env.BUILD_URL}|Open>)")
      }
    }
    stage('Environments build') {
      steps {
        build(job: 'crisiscleanup-web-build',
          parameters: [
            string(name: 'upstreamBranch', value: "${env.BRANCH_NAME}")
          ],
          propagate: true,
          wait: true)
      }
    }
    stage('Functional environment test') {
      steps {
        build(job: 'crisiscleanup-functional-tests',
          parameters: [string(name: 'upstreamBranch', value: "${env.BRANCH_NAME}")],
          propagate: true,
          wait: true)
      }
    }
    stage('Deploy pull request to dev and staging') {
      when {
        environment name: 'CHANGE_ID', value: ''
        branch 'master'
      }
      steps {
        build(job: 'crisiscleanup-web-deploy',
          parameters: [
            string(name: 'deployEnv', value: "devstaging")
          ],
          propagate: true,
          wait: true)
      }
    }
    stage('Deploy to prod') {
      when {
        branch 'master'
      }
      steps {
        build(job: 'crisiscleanup-web-deploy',
          parameters: [
            string(name: 'deployEnv', value: "prod")
          ],
          propagate: true,
          wait: true)
      }
    }
    // TODO: Pull requests
  }
  post {
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
