# Define the array of JSON objects
messages=(
  '{"name": "Alex Rivera", "email": "alex.riv@gmail.com", "subject": "1-on-1 Coaching", "message": "Hey! Do you offer personal training for beginners?"}'
  '{"name": "Sarah Chen", "email": "schen88@outlook.com", "subject": "Group Class Schedule", "message": "Are evening classes beginner-friendly?"}'
  '{"name": "Marcus Thorne", "email": "m.thorne@business.co", "subject": "Corporate Rates", "message": "Looking for team-building rates for 10 people."}'
  '{"name": "Jordan Smith", "email": "jsmith_fit@yahoo.com", "subject": "Membership Inquiry", "message": "Is there a contract for the monthly membership?"}'
  '{"name": "Elena Rodriguez", "email": "elena.boxing@icloud.com", "subject": "Sparring Sessions", "message": "Do you have technical sparring hours?"}'
  '{"name": "David Park", "email": "dpark_train@protonmail.com", "subject": "Equipment Question", "message": "Do you provide rental gloves?"}'
  '{"name": "Taylor Reed", "email": "treed92@gmail.com", "subject": "Student Discount", "message": "Do you offer student discounts?"}'
  '{"name": "Coach Mike", "email": "mike.gloves@boxinggym.net", "subject": "Collaboration", "message": "Would love to discuss a joint gym event."}'
  '{"name": "Samantha Lee", "email": "slee_wellness@gmail.com", "subject": "Morning Classes", "message": "Do you have 6:00 AM slots available?"}'
  '{"name": "Chris Vance", "email": "cvance@techcorp.com", "subject": "Waitlist Status", "message": "Checking if a spot opened for Tuesday night HIIT."}'
)

# Loop through the array and send each one via CURL
for msg in "${messages[@]}"; do
  curl -X POST http://localhost:5000/messages \
       -H "Content-Type: application/json" \
       -d "$msg"
  echo -e "\nSent message from: $(echo $msg | jq -r '.name' 2>/dev/null || echo 'User')"
done