function checkSymptoms() {
    // Get the symptoms entered by the user
    var symptomsInput = document.getElementById("symptoms").value;

    // Basic validation - ensure the user entered some symptoms
    if (!symptomsInput.trim()) {
        alert("Please enter your symptoms.");
        return;
    }

    // Perform diagnosis based on the entered symptoms
    var diagnosis = performDiagnosis(symptomsInput);

    // Display the diagnosis result
    document.getElementById("result").innerHTML = "Diagnosis: " + diagnosis;
}

function performDiagnosis(symptoms) {
    // Array of symptoms and corresponding diagnoses
    var symptomDiagnosisMap = {
        "headache": "You may have a tension headache. Get plenty of rest and stay hydrated.",
        "fever": "You may have a viral infection. Rest and consult with a healthcare professional if symptoms persist.",
        "cough": "You may have a respiratory infection. Rest and stay hydrated. Consult with a healthcare professional if needed.",
        "skin redness": "You may have sunburn or skin redness can sometimes be a sign of a health condition like lupus or scarlet fever, or a chronic disorder.",
        "stomach pain": "Possible causes include constipation, irritable bowel syndrome, food allergies, lactose intolerance, food poisoning, or a stomach virus.",
        "stomachache": "Possible causes include constipation, irritable bowel syndrome, food allergies, lactose intolerance, food poisoning, or a stomach virus.",
        "body pain": "Body pain can result from tiredness or exercise and commonly occur with infections such as the flu.",
        "diarrhea": "You may experience abdominal pain, nausea, bloating, and possibly fever. Avoid milk-based foods and drink more fluids.",
        "mononucleosis": "Symptoms include extreme fatigue, sore throat, fever, loss of appetite, and muscle aches. Rest, eat healthy foods, and avoid alcohol.",
        "conjunctivitis": "Symptoms include redness, itching, tearing, and a burning sensation in the eye. Avoid rubbing your eyes and use a cool wet washcloth to remove crusting.",
        "flu": "Common symptoms are fever, headache, fatigue, and a dry cough. Rest, avoid exercise, and drink lots of fluids.",
        "skin allergy": "Symptoms may include itching, blistering, and skin cracking. Avoid harsh soaps or detergents and use anti-itch cream.",
        "loss of vision": "Possible causes include poor vision or complete loss of vision in darkness. Eat a healthy diet rich in vitamin A, such as carrots, eggs, and fruits.",
        "scurvy": "Symptoms include bleeding and wounds that take longer to heal. Eat foods rich in vitamin C like cruciferous vegetables, strawberries, and tomatoes.",
        "malaria": "Symptoms include fever, sweats, chills, headaches, muscle aches, nausea, and vomiting. Increase protein intake and consult an infectious disease specialist.",
        "pneumonia": "Symptoms include fever, dehydration, fatigue, loss of appetite, malaise, clammy skin, or sweating. Follow a high-protein diet and stay hydrated. Consult a pulmonologist.",
        "pink eye": "Symptoms include redness, itching, tearing, and a burning sensation in the eye. Avoid rubbing your eyes and use a cool wet washcloth to remove crusting.",
        "red eye": "Symptoms include redness, itching, tearing, and a burning sensation in the eye. Avoid rubbing your eyes and use a cool wet washcloth to remove crusting.",
        "cold": "You may have a respiratory infection. Rest and stay hydrated. Consult with a healthcare professional if needed.",
        "throat pain": "Possible causes include viral infections like the common cold or flu, bacterial infections like strep throat, or irritation from smoking or allergies.",
        "sweating": "Excessive sweating (hyperhidrosis) can be influenced by factors like heat, anxiety, or an underlying medical issue. Stay hydrated.",
        "loose motion": "Symptoms may include abdominal pain, nausea, bloating, and possibly fever. Avoid milk-based foods and drink more fluids.",
        "hair fall": "Possible causes include aging, heredity, and hormonal changes.",
        "acne": "Possible causes include hormonal changes, heavy sweating, and humidity.",
        "back pain": "Back pain can be caused by a variety of factors including poor posture, muscle strain, or underlying health conditions. Consult with a healthcare professional for an accurate diagnosis."
        // Add more symptoms and diagnoses as needed
    };

    // Split the entered symptoms into an array
    var userSymptoms = symptoms.toLowerCase().split(",").map(symptom => symptom.trim());

    // Initialize an empty array to store possible diagnoses
    var diagnoses = [];

    // Check each symptom against the diagnosis map
    userSymptoms.forEach(symptom => {
        var diagnosis = symptomDiagnosisMap[symptom];
        if (diagnosis) {
            diagnoses.push(diagnosis);
        }
    });

    // If no diagnosis is found, provide a general message
    if (diagnoses.length === 0) {
        diagnoses.push("No specific diagnosis found. Consult with a healthcare professional for accurate diagnosis.");
    }

    // Join the diagnoses into a single string
    return diagnoses.join(" ");
}
