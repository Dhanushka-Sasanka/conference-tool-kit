// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  baseUrl: 'http://localhost:8080/api/',
  baseUrlAuth: 'http://localhost:8080/api/auth/',
  paperCheckUrl: 'ec2-3-16-138-68.us-east-2.compute.amazonaws.com:5000/inference_paper_matching',
  layoutCheckUrl: 'ec2-3-16-138-68.us-east-2.compute.amazonaws.com:5000/inference_layout_parser',
  referenceCheckUrl: 'ec2-3-16-138-68.us-east-2.compute.amazonaws.com:5000/inference_reference_validation',
  summarizationUrl: 'ec2-52-221-233-118.ap-southeast-1.compute.amazonaws.com:8080/summarization_api'

};
