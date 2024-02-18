function submitForm() {
  var height = document.getElementById('height').value;
  var weight = document.getElementById('weight').value;
  var ageGroup = document.getElementById('ageGroup').value;
  var gender = document.getElementById('gender').value;

  if (height.trim() === '' || weight.trim() === '' || ageGroup.trim() === '' || gender.trim() === '') {
      alert('Please fill in all fields.');
      return;
  }

  var selectedHealthIssues = [];
  var checkboxes = document.getElementsByName('healthIssue');
  for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
          selectedHealthIssues.push(checkboxes[i].value);
      }
  }

  // Simulating success
  alert('Form submitted successfully! Redirecting...');

  // Build link using a separate function
  var link = buildLink(height, weight, ageGroup, gender, selectedHealthIssues);

  // Redirect to the constructed link
  window.location.href = link;
}


function buildLink(height, weight, ageGroup, gender, healthIssues) {
  var baseLinks = [
    'https://doctors.nyp.org/doctor-search?',
    'https://www.mountsinai.org',
    'https://nyulangone.org',
    'https://lenoxhill.northwell.edu'
  ];

  var randomIndex = Math.floor(Math.random() * baseLinks.length);
  var selectedLink = baseLinks[randomIndex];

  // You can append query parameters here based on your requirements
  // For example:
  // selectedLink += 'height=' + height + '&weight=' + weight;

  return selectedLink;
}

