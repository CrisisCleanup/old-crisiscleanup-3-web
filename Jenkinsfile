pipeline {
  agent {
    label 'master'
  }
  environment {
    TARGET_BRANCH = getTargetBranch()
  }
  stages {
    stage('Build and unit test') {
      steps {
        build(job: 'crisiscleanup-web-unit',
          parameters: [
            string(name: 'upstreamBranch', value: "${env.TARGET_BRANCH}")
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
            string(name: 'upstreamBranch', value: "${env.TARGET_BRANCH}")
          ],
          propagate: true,
          wait: true)
      }
    }
    stage('Functional environment test') {
      steps {
        build(job: 'crisiscleanup-functional-tests',
          parameters: [string(name: 'upstreamBranch', value: "${env.TARGET_BRANCH}")],
          propagate: true,
          wait: true)
      }
    }
    stage('Deploy pull request to dev and staging') {
      when {
        allOf {
          changeRequest()
          not {
            branch 'master'
          }
        }
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

def getTargetBranch() {
  return env.CHANGE_TARGET ? env.CHANGE_TARGET : env.BRANCH_NAME
}
