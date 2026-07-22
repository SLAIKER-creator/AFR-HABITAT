import { config } from "../../config";

export default function MentionsLegales() {
  const { business } = config;

  return (
    <main className="max-w-4xl mx-auto py-16 px-6 text-gray-800">
      <h1 className="text-4xl font-bold mb-8 text-gray-900 border-b pb-4">
        Mentions Légales
      </h1>

      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-8 rounded-r-md">
        <p className="text-sm text-amber-800 font-medium">
          ⚠️ Pensez à remplacer toutes les informations entre crochets <strong>[À COMPLÉTER]</strong> par vos données réelles avant de mettre le site en production.
        </p>
      </div>

      <div className="space-y-8">
        {/* Section 1 */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            1. Éditeur du site
          </h2>
          <div className="space-y-2 bg-gray-50 p-6 rounded-lg border border-gray-100">
            <p><strong>Nom de l'entreprise :</strong> {business.brandFirst} {business.brandAccent}</p>
            <p>
              <strong>Forme juridique :</strong>{" "}
              <span className="text-amber-600 font-semibold">[À COMPLÉTER : ex. Auto-entreprise, SARL, SASU...]</span>
            </p>
            <p>
              <strong>Capital social :</strong>{" "}
              <span className="text-amber-600 font-semibold">[À COMPLÉTER si applicable, sinon indiquer "Non applicable"]</span>
            </p>
            <p>
              <strong>Siège social :</strong> {business.address}
            </p>
            <p>
              <strong>Numéro de SIRET :</strong> {business.siret}
            </p>
            <p>
              <strong>Numéro de TVA Intracommunautaire :</strong>{" "}
              <span className="text-amber-600 font-semibold">[À COMPLÉTER si applicable, sinon indiquer "Non applicable"]</span>
            </p>
            <p>
              <strong>Directeur de la publication :</strong>{" "}
              <span className="text-amber-600 font-semibold">[À COMPLÉTER : Votre nom et prénom]</span>
            </p>
            <p><strong>Téléphone :</strong> {business.phone.display}</p>
            <p><strong>Email :</strong> {business.email}</p>
          </div>
        </section>

        {/* Section 2 */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            2. Hébergement du site
          </h2>
          <div className="space-y-2 bg-gray-50 p-6 rounded-lg border border-gray-100">
            <p>
              <strong>Nom de l'hébergeur :</strong>{" "}
              <span className="text-amber-600 font-semibold">[À COMPLÉTER : ex. Cloudflare Pages]</span>
            </p>
            <p>
              <strong>Adresse de l'hébergeur :</strong>{" "}
              <span className="text-amber-600 font-semibold">[À COMPLÉTER]</span>
            </p>
            <p>
              <strong>Contact de l'hébergeur :</strong>{" "}
              <span className="text-amber-600 font-semibold">[À COMPLÉTER]</span>
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            3. Activité réglementée et Assurances
          </h2>
          <div className="space-y-3 bg-gray-50 p-6 rounded-lg border border-gray-100">
            <p>
              <strong>Qualification professionnelle :</strong>{" "}
              <span className="text-amber-600 font-semibold">[À COMPLÉTER : ex. Artisan qualifié, numéro d'inscription au Répertoire des Métiers]</span>
            </p>
            <p>
              <strong>Assurance décennale professionnelle :</strong>{" "}
              <span className="text-amber-600 font-semibold">[À COMPLÉTER obligatoirement : Nom de la compagnie d'assurance, coordonnées de l'assureur et zone géographique couverte]</span>
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            4. Propriété intellectuelle
          </h2>
          <p className="leading-relaxed">
            L'ensemble du contenu de ce site (textes, logos, visuels d'illustration) appartient à <strong>{business.brandFirst} {business.brandAccent}</strong> ou à ses ayants droit. Toute reproduction, représentation, modification ou adaptation est strictement interdite sans autorisation préalable écrite.
          </p>
          <p className="mt-2 text-sm text-gray-500">Copyright : {new Date().getFullYear()}</p>
        </section>

        {/* Section 5 */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            5. Médiation de la consommation
          </h2>
          <p className="leading-relaxed">
            <strong>Médiateur :</strong>{" "}
            <span className="text-amber-600 font-semibold">[À COMPLÉTER : Conformément à la loi, indiquer le nom, l'adresse postale et le site web du médiateur de la consommation auquel vous avez souscrit]</span>
          </p>
        </section>
      </div>
    </main>
  );
}
