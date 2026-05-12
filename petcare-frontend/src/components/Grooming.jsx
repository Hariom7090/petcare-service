function Grooming() {
  return (
    <section class="section" id="grooming">
        <div class="container">
            <div class="section-title">
                <h2>Grooming Packages</h2>
                <p>Choose from our selection of grooming packages designed for different needs</p>
            </div>

            <table class="pricing-table">
                <thead>
                    <tr>
                        <th>Service</th>
                        <th>Basic Package</th>
                        <th>Premium Package</th>
                        <th>Deluxe Package</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="package-name">Bath & Brush</td>
                        <td>✓</td>
                        <td>✓</td>
                        <td>✓</td>
                    </tr>
                    <tr>
                        <td class="package-name">Haircut & Styling</td>
                        <td>-</td>
                        <td>✓</td>
                        <td>✓</td>
                    </tr>
                    <tr>
                        <td class="package-name">Nail Trimming</td>
                        <td>✓</td>
                        <td>✓</td>
                        <td>✓</td>
                    </tr>
                    <tr>
                        <td class="package-name">Ear Cleaning</td>
                        <td>-</td>
                        <td>✓</td>
                        <td>✓</td>
                    </tr>
                    <tr>
                        <td class="package-name">Teeth Brushing</td>
                        <td>-</td>
                        <td>-</td>
                        <td>✓</td>
                    </tr>
                    <tr>
                        <td class="package-name">Skin Treatment</td>
                        <td>-</td>
                        <td>-</td>
                        <td>✓</td>
                    </tr>
                    <tr>
                        <td class="package-name">Price</td>
                        <td class="price">1500</td>
                        <td class="price">2000</td>
                        <td class="price">3000</td>
                    </tr>
                </tbody>
            </table>

            <div class="addons">
                <h3 class="section-title">Add-On Services</h3>
                <div class="addons-grid">
                    <div class="addon-card">
                        <h4>Flea & Tick Treatment</h4>
                        <p class="addon-price">500</p>
                    </div>
                    <div class="addon-card">
                        <h4>De-shedding Treatment</h4>
                        <p class="addon-price">600</p>
                    </div>
                    <div class="addon-card">
                        <h4>Pawdicure</h4>
                        <p class="addon-price">400</p>
                    </div>
                    <div class="addon-card">
                        <h4>Teeth Cleaning</h4>
                        <p class="addon-price">300</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Grooming;
