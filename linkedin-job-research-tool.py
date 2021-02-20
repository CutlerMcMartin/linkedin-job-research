import requests
from bs4 import BeautifulSoup as bs

URL = 'https://www.linkedin.com/jobs/search/?currentJobId=2430588547'
page = requests.get(URL)
soup = bs(page.content, 'html.parser')

results = soup.find(_class="filter-list")

with open("output1.html", "w") as file:
    file.write(str(soup))