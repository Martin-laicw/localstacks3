The steps required to deploy the application on S3 using LocalStack:

1. Create a separate project folder containing the dist folder and create
the policy.json file.

--> To turn your React project into a static website, you can run the following command in the root directory of the project:
npm run build

--> Create a folder called my-site/ in the root directory of the React project and move the dist/ folder to the my-site/ folder.

Inside the my-site/ folder, create a new file called policy.json with the following:
{
"Version": "2012-10-17",
"Statement": [
{
"Sid": "PublicReadGetObject",
"Effect": "Allow",
"Principal": "*",
"Action": ["s3:GetObject"],
"Resource": ["arn:aws:s3:::my-site/*"]
}
]
}


2. Create the docker-compose.yml file.

--> Inside the file add the following:
version: “3.8”
services:
localstack:
container_name: stacky
image: localstack/localstack
ports:
- "127.0.0.1:4566:4566"
- "127.0.0.1:4510-4559:4510-4559"
volumes:
- ./my-site:/opt/code/localstack/my-site


3. Run the Docker Compose file.

-->To run the container using Docker Compose, you need to make sure that you’re in the same directory as the docker-compose.yml file and run the following command:

docker compose up -d

To get into the container and make use of the AWS emulation, you can run the
following command:

docker exec -it stacky bash

4. Create an S3 bucket.

--> create the S3 bucket using the LocalStack CLI commands. This can be
done with the following command:

awslocal s3api create-bucket --bucket my-site

The details about the buckets we have created using the following command:

awslocal s3api list-buckets

5. Move the index.html file to the S3 bucket.

-->upload the HTML file to the bucket using the following command:

cd dist
awslocal s3 website s3://my-site --index-document index.html

6. Move the rest of the files in the dist/ folder to the S3 bucket.

--> use the following command to
upload the rest of the content:

cd ..
awslocal s3 sync dist s3://my-site

7. Configure the bucket policy.

--> allow access to the files in our S3 bucket using a policy configuration.
The following command can be run to configure the policy:

awslocal s3api put-bucket-policy --bucket my-site --policy file://policy.json

8. Check if the website has been deployed by visiting:

http://my-site.s3.localhost.localstack.cloud:4566/index.html