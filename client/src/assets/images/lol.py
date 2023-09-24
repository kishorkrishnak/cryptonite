import csv
import re

data = """Order number,Ticket number,First Name,Last Name,Email,Twitter,Company,Title,Featured,Ticket title,Ticket venue,Access code,Discount,Price,Currency,Number of tickets,Paid by (name),Paid by (email),Paid date (UTC),Checkin Date (UTC),Ticket Price Paid
DSCE231826366,DSCA231748560,Abneesh kumar,Sharma,a*******************@gmail.com,,,,,RSVP,In-person,,,0.00,USD,1,Abneesh kumar Abneesh,a*******************@gmail.com,2023-09-22 12:20:39+00:00,,0.00
DSCE231826479,DSCA231748663,Achinthya,Ag,a**********@gmail.com,,,,,RSVP,In-person,,,0.00,USD,1,Achinthya Ag,a**********@gmail.com,2023-09-22 12:32:06+00:00,,0.00
DSCE231826503,DSCA231748685,Adithya,Mayya,a**************@gmail.com,,,,,RSVP,In-person,,,0.00,USD,1,Adithya Mayya,a**************@gmail.com,2023-09-22 12:35:14+00:00,,0.00
DSCE231822519,DSCA231745190,Akrithi,Shetty,a**************@gmail.com,,,,,RSVP,In-person,,,0.00,USD,1,Akrithi Shetty,a**************@gmail.com,2023-09-22 01:13:11+00:00,,0.00
DSCE231822628,DSCA231745281,Aksha,Rai,r*********@gmail.com,,,,,RSVP,In-person,,,0.00,USD,1,Aksha Rai,r*********@gmail.com,2023-09-22 02:05:11+00:00,,0.00
DSCE231822630,DSCA231745283,Amish,Chandran Kasaragod,a********@gmail.com,,,,,RSVP,In-person,,,0.00,USD,1,Amish Chandran,a********@gmail.com,2023-09-22 02:06:11+00:00,,0.00
DSCE231826450,DSCA231748652,Anujna,K,a*********@gmail.com,,,,,RSVP,In-person,,,0.00,USD,1,Anujna K,a*********@gmail.com,2023-09-22 12:28:25+00:00,,0.00
DSCE231822868,DSCA231745506,Anuktha,Kayarmar,a********@gmail.com,,,,,RSVP,In-person,,,0.00,USD,1,Anuktha Kayarmar,a********@gmail.com,2023-09-22 03:23:49+00:00,,0.00
DSCE231826424,DSCA231748612,Anvitha,Gowda,g***************@gmail.com,,,,,RSVP,In-person,,,0.00,USD,1,Anvitha Gowda,g***************@gmail.com,2023-09-22 12:25:44+00:00,,0.00
DSCE231826406,DSCA231748604,Arjun,Krishna,a*************@gmail.com,,,,,RSVP,In-person,,,0.00,USD,1,Arjun Krishna,a*************@gmail.com,2023-09-22 12:24:31+00:00,,0.00
DSCE231825461,DSCA231747805,Arpitha,Bharadwaj,a****************@gmail.com,,,,,RSVP,In-person,,,0.00,USD,1,Arpitha Bharadwaj,a****************@gmail.com,2023-09-22 10:17:55+00:00,,0.00
DSCE231821098,DSCA231744025,Asha,Rai,r*********@gmail.com,,Puttur,CTO,,RSVP,In-person,,,0.00,USD,1,Asha Rai,r*********@gmail.com,2023-09-21 16:06:03+00:00,,0.00
DSCE231826087,DSCA231748324,Ashith.v.,Suvarna,a**************@gmail.com,,,,,RSVP,In-person,,,0.00,USD,1,Ashith.v. Suvarna,a**************@gmail.com,2023-09-22 11:43:25+00:00,,0.00
DSCE231826262,DSCA231748474,Bindu,Bhandary,b***************@gmail.com,,,,,RSVP,In-person,,,0.00,USD,1,Bindu Bhandary,b***************@gmail.com,2023-09-22 12:07:22+00:00,,0.00
DSCE231820733,DSCA231743669,Chaithanya,Shettigar,c*************@gmail.com,,,,,RSVP,In-person,,,0.00,USD,1,Chaithanya Shettigar,c*************@gmail.com,2023-09-21 14:58:29+00:00,,0.00
DSCE231823988,DSCA231746494,Danush,Kumar J,d**************@gmail.com,,GOOGLE,Data Scientist,requested,RSVP,In-person,,,0.00,USD,1,Danush Kumar J,d**************@gmail.com,2023-09-22 06:52:32+00:00,,0.00
DSCE231826319,DSCA231748527,Deeksha,Maniyani,d******************@gmail.com,,,,,RSVP,In-person,,,0.00,USD,1,Deeksha Maniyani,d******************@gmail.com,2023-09-22 12:15:57+00:00,,0.00
DSCE231822531,DSCA231745231,Deeksha,Rai,d**********@gmail.com,,,,,RSVP,In-person,,,0.00,USD,1,Deeksha Rai,d**********@gmail.comc,2023-09-22 01:20:35+00:00,,0.00
DSCE231822571,DSCA231745239,Deeksha,Rai,d************@gmail.com,,,,,RSVP,In-person,,,0.00,USD,1,Deeksha Rai,d**********@gmail.comc,2023-09-22 01:42:56+00:00,,0.00
DSCE231822861,DSCA231745504,Dhanyashree,K,d*************@gmail.com,,,,,RSVP,In-person,,,0.00,USD,1,Dhanyashree K,d*************@gmail.com,2023-09-22 03:22:21+00:00,,0.00
DSCE231826426,DSCA231748631,Harshith,Av,h***********@gmail.com,,,,,RSVP,In-person,,,0.00,USD,1,Harshith av,h***********@gmail.com,2023-09-22 12:25:55+00:00,,0.00
DSCE231826538,DSCA231748718,Hithesh,Kajemoole,h*******************@gmail.com,,,,,RSVP,In-person,,,0.00,USD,1,Hithesh Kajemoole,h*******************@gmail.com,2023-09-22 12:39:50+00:00,,0.00
DSCE231822542,DSCA231745211,Jishnu.,M,j**************@gmail.com,,,,,RSVP,In-person,,,0.00,USD,1,Jishnu. M,j**************@gmail.com,2023-09-22 01:27:09+00:00,,0.00
DSCE231826439,DSCA231748633,Mahalakshmi,V,m**************@gmail.com,,,,,RSVP,In-person,,,0.00,USD,1,Mahalakshmi V,m**************@gmail.com,2023-09-22 12:27:50+00:00,,0.00
DSCE231826561,DSCA231748736,Mahi,J hegde,m*****************@gmail.com,,,,,RSVP,In-person,,,0.00,USD,1,Mahi J hegde,m*****************@gmail.com,2023-09-22 12:42:49+00:00,,0.00
DSCE231826397,DSCA231748580,Moksha,.,m************@gmail.com,,Vivekananda college,Student,,RSVP,In-person,,,0.00,USD,1,Moksha .,m************@gmail.com,2023-09-22 12:23:03+00:00,,0.00
DSCE231822641,DSCA231745290,Namrathajm,Puttur,n***************@gmail.com,,,,,RSVP,In-person,,,0.00,USD,1,Namrathajm Puttur,n***************@gmail.com,2023-09-22 02:10:10+00:00,,0.00
DSCE231826432,DSCA231748616,Nayana.A.M,Devika,m************@gmail.com,,,,,RSVP,In-person,,,0.00,USD,1,Nayana.A.M Devika,m************@gmail.com,2023-09-22 12:26:34+00:00,,0.00
DSCE231822768,DSCA231745425,Nireeksha,K,k***********@gmail.com,,,,,RSVP,In-person,,,0.00,USD,1,Nireeksha K,k***********@gmail.com,2023-09-22 02:53:18+00:00,,0.00
DSCE231822666,DSCA231745322,Nishal,Nishu,n*************@gmail.com,,,,,RSVP,In-person,,,0.00,USD,1,Nishal Nishu,n*************@gmail.com,2023-09-22 02:21:16+00:00,,0.00
DSCE231826489,DSCA231748670,Prajith,M,p*********@gmail.com,,,,,RSVP,In-person,,,0.00,USD,1,Prajith M,p*********@gmail.com,2023-09-22 12:33:29+00:00,,0.00
DSCE231826090,DSCA231748325,Prajna,BR,p**********@gmail.com,,,,,RSVP,In-person,,,0.00,USD,1,Prajna BR,p**********@gmail.com,2023-09-22 11:43:47+00:00,,0.00
DSCE231822684,DSCA231745342,Pratham,Prathu,p***************@gmail.com,,,,,RSVP,In-person,,,0.00,USD,1,Pratham Prathu,p***************@gmail.com,2023-09-22 02:27:55+00:00,,0.00
DSCE231826038,DSCA231748276,Puneeth,K,k**********@gmail.com,,,,,RSVP,In-person,,,0.00,USD,1,Puneeth K,k**********@gmail.com,2023-09-22 11:36:28+00:00,,0.00
DSCE231826390,DSCA231748586,RAHASHREE,S,r***********@gmail.com,,,,,RSVP,In-person,,,0.00,USD,1,RAHASHREE S,r***********@gmail.com,2023-09-22 12:22:36+00:00,,0.00
DSCE231826464,DSCA231748653,Rakshitha,KJ,r************@gmail.com,,,,,RSVP,In-person,,,0.00,USD,1,Rakshitha KJ,r************@gmail.com,2023-09-22 12:30:09+00:00,,0.00
DSCE231826414,DSCA231748605,Ravikiran,A,a************@gmail.com,,,,,RSVP,In-person,,,0.00,USD,1,Ravikiran A Abeera,a************@gmail.com,2023-09-22 12:25:10+00:00,,0.00
DSCE231822751,DSCA231745411,Sharanya,K.R.,s************@gmail.com,,,,,RSVP,In-person,,,0.00,USD,1,Sharanya K.R.,s************@gmail.com,2023-09-22 02:45:51+00:00,,0.00
DSCE231822511,DSCA231745179,Shriharsha,Rao P,s*************@gmail.com,,,,,RSVP,In-person,,,0.00,USD,1,Shriharsha Rao P,s*************@gmail.com,2023-09-22 01:08:48+00:00,,0.00
DSCE231822533,DSCA231745204,Sudhin,Acharya,s***************@gmail.com,,,,,RSVP,In-person,,,0.00,USD,1,Sudhin Acharya,s***************@gmail.com,2023-09-22 01:21:21+00:00,,0.00
DSCE231826497,DSCA231748671,Sushanth rai,Rai,r****************@gmail.com,,Computer software,Software,requested,RSVP,In-person,,,0.00,USD,1,Sushanth rai Rai,r****************@gmail.com,2023-09-22 12:34:17+00:00,,0.00
DSCE231826536,DSCA231748733,Swayam,Ankolekar,a**************@gmail.com,,,,,RSVP,In-person,,,0.00,USD,1,Swayam Ankolekar,a**************@gmail.com,2023-09-22 12:39:32+00:00,,0.00
DSCE231824604,DSCA231747071,Tanvi,Cp,t************@gmail.com,,,,,RSVP,In-person,,,0.00,USD,1,Tanvi Cp,t************@gmail.com,2023-09-22 08:44:41+00:00,,0.00
DSCE231826416,DSCA231748606,Vandith,M,v**********@gmail.com,,benglore,Others job,requested,RSVP,In-person,,,0.00,USD,1,Vandith M,v**********@gmail.com,2023-09-22 12:25:11+00:00,,0.00
DSCE231822694,DSCA231745353,Varshini,VB,v************@gmail.com,,,,,RSVP,In-person,,,0.00,USD,1,Varshini VB,v************@gmail.com,2023-09-22 02:29:51+00:00,,0.00
DSCE231822518,DSCA231745184,Veekshith,Amai,v********************@gmail.com,,VIVEKANANDA COLLEGE PUTTUR,Student,,RSVP,In-person,,,0.00,USD,1,Veekshith Amai,v********************@gmail.com,2023-09-22 01:12:45+00:00,,0.00
"""

# Initialize lists to store extracted information
names = []
classes_companies = []
mobile_numbers = []
emails = []

# Split the data into lines
lines = data.strip().split('\n')

# Loop through each line and extract the required information
for line in lines:
    # Split the line into fields using a comma as the delimiter
    fields = line.split(',')

    # Extract the name (First Name + Last Name)
    first_name = fields[2].strip()
    last_name = fields[3].strip()
    name = f"{first_name} {last_name}"
    names.append(name)

    # Extract the class or company (Title + Company)
    title = fields[7].strip()
    company = fields[6].strip()
    class_company = f"{title} {company}"
    classes_companies.append(class_company)

    # Extract the mobile number (if available)
    email = fields[4].strip()
    mobile_number = re.search(r'\b[A-Za-z0-9._%+-]+@gmail\.com\b', email).group(0)
    mobile_numbers.append(mobile_number)

    # Extract the email
    emails.append(email)

# Print the extracted information for each entry
for i in range(len(names)):
    print(f"Name: {names[i]}")
    print(f"Class/Company: {classes_companies[i]}")
    print(f"Mobile Number: {mobile_numbers[i]}")
    print(f"Email: {emails[i]}")
    print()
