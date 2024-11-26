start page
![image](https://github.com/user-attachments/assets/4c390748-4229-4294-b41a-1e5036c00477)
Employee login -> dashboard
![image](https://github.com/user-attachments/assets/20835ec1-8b8b-4587-9b0b-e0208b518fe8)
![image](https://github.com/user-attachments/assets/45613baf-1d43-4164-9d23-8a686aea85fe)


Adming login ->dashboard

![image](https://github.com/user-attachments/assets/36775d14-7b5d-4182-ac3b-caf13d2165a2)
![image](https://github.com/user-attachments/assets/e63d18f8-4db5-4be0-a93d-093d4e375dcf)
![image](https://github.com/user-attachments/assets/41f85b23-82af-4df2-b2e3-9b7a5b576491)
![image](https://github.com/user-attachments/assets/0cbcdbf6-2241-43d7-9c45-12df5b1826ad)


![image](https://github.com/user-attachments/assets/19838a34-f4dc-45f3-9160-2ea9f44feca0)


1.사용자가 React 애플리케이션에 접속합니다.
2.CloudFront를 통해 S3에서 정적 파일을 가져와 애플리케이션이 로드됩니다.
3. 사용자가 설문조사에 응답하거나 다른 작업을 수행하면, React 애플리케이션이 API Gateway를 통해 Lambda 함수를 호출합니다.
4. Lambda 함수가 rds와 연동하여 데이터를 저장하거나 처리합니다.(postgres->rds PostgreSQL 마이그레이션)
5. 필요하면, Lambda 함수가 데이터를 가공해 다시 React 애플리케이션에 반환합니다
