function Veterinary() {
  return (
      <section class="section" id="veterinary">
        <div class="container">
            <div class="section-title">
                <h2>Veterinary Services</h2>
                <p>Comprehensive healthcare for your beloved pets</p>
            </div>

            <div class="vet-info">

                <div class="vet-card">
                    <div class="vet-icon">
                        <i class="fas fa-shield-dog"></i>
                    </div>
                    <h3>Preventive Care</h3>
                    <p>Regular check-ups and preventive treatments to keep your pet healthy.</p>
                    <ul>
                        <li><i class="fas fa-check-circle"></i> Annual wellness exams</li>
                        <li><i class="fas fa-syringe"></i> Vaccinations</li>
                        <li><i class="fas fa-bug"></i> Parasite prevention</li>
                        <li><i class="fas fa-bowl-food"></i> Nutritional counseling</li>
                    </ul>
                </div>

                <div class="vet-card">
                    <div class="vet-icon">
                        <i class="fas fa-stethoscope"></i>
                    </div>
                    <h3>Medical Services</h3>
                    <p>Diagnosis and treatment of illnesses and injuries.</p>
                    <ul>
                        <li><i class="fas fa-microscope"></i> Diagnostic testing</li>
                        <li><i class="fas fa-pills"></i> Internal medicine</li>
                        <li><i class="fas fa-scalpel"></i> Surgery</li>
                        <li><i class="fas fa-tooth"></i> Dental care</li>
                    </ul>
                </div>

                <div class="vet-card">
                    <div class="vet-icon">
                        <i class="fas fa-truck-medical"></i>
                    </div>
                    <h3>Emergency Care</h3>
                    <p>24/7 emergency services for critical situations.</p>
                    <ul>
                        <li><i class="fas fa-heart-pulse"></i> Emergency surgery</li>
                        <li><i class="fas fa-procedures"></i> Critical care</li>
                        <li><i class="fas fa-skull-crossbones"></i> Poison control</li>
                        <li><i class="fas fa-kit-medical"></i> Trauma treatment</li>
                    </ul>
                </div>

            </div>

        </div>
    </section>
  );
}

export default Veterinary;
