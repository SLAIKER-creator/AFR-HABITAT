import { config } from "../../config";

export default function PolitiqueConfidentialite() {
  const { business } = config;

  return (
    <main className="max-w-4xl mx-auto py-16 px-6 text-gray-800">
      <h1 className="text-4xl font-bold mb-8 text-gray-900 border-b pb-4">
        Politique de Confidentialité
      </h1>

      <p className="mb-8 text-sm text-gray-500">
        Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
      </p>

      <div className="space-y-8 leading-relaxed">
        {/* Section 1 */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            1. Responsable du traitement des données
          </h2>
          <p>
            Le responsable du traitement des données collectées via ce site est <strong>{business.brandFirst} {business.brandAccent}</strong>, joignable à l'adresse suivante :{" "}
            <a href={`mailto:${business.email}`} className="text-blue-600 hover:underline">
              {business.email}
            </a>.
          </p>
        </section>

        {/* Section 2 */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            2. Données collectées et finalités
          </h2>
          <div className="space-y-4">
            <p>
              <strong>Données collectées :</strong> Lorsque vous utilisez le formulaire de demande de devis présent sur notre site, nous collectons les données personnelles suivantes : votre nom, votre numéro de téléphone et votre adresse e-mail. Des données techniques (telles que l'adresse IP) peuvent également être temporairement traitées par notre hébergeur lors de la soumission du formulaire pour des raisons de sécurité.
            </p>
            <p>
              <strong>Finalités :</strong> Ces informations servent exclusivement à réceptionner votre demande, à vous recontacter et à établir un devis adapté à vos besoins.
            </p>
            <p>
              <strong>Base légale :</strong> Le traitement de ces données repose sur l'exécution de mesures précontractuelles (l'établissement de votre devis) et sur votre action volontaire de soumettre le formulaire.
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            3. Partage des données
          </h2>
          <p>
            Vos données personnelles ne sont jamais vendues, louées ou cédées à des tiers. Elles sont exclusivement destinées à un usage interne par <strong>{business.brandFirst} {business.brandAccent}</strong>. Le seul tiers impliqué est notre hébergeur web, qui assure l'hébergement technique du site et traite les données de connexion uniquement pour des raisons de sécurité et de maintenance.
          </p>
        </section>

        {/* Section 4 */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            4. Durée de conservation
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Les données (nom, e-mail, téléphone) recueillies via le formulaire de devis sont conservées pour une durée maximale de <strong>3 ans</strong> à compter de notre dernier contact, si la demande n'aboutit pas à une prestation.
            </li>
            <li>
              Si le devis est accepté et qu'une intervention a lieu, les documents contractuels et liés à la facturation (contenant vos coordonnées) seront conservés pendant <strong>10 ans</strong>, conformément aux obligations légales, comptables et fiscales françaises.
            </li>
          </ul>
        </section>

        {/* Section 5 */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            5. Droits des utilisateurs
          </h2>
          <p>
            Conformément à la réglementation européenne sur la protection des données (RGPD), vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation et d'opposition au traitement de vos données.
          </p>
          <p className="mt-3">
            Pour exercer ces droits, vous pouvez nous contacter à tout moment par e-mail à :{" "}
            <a href={`mailto:${business.email}`} className="text-blue-600 hover:underline font-semibold">
              {business.email}
            </a>.
          </p>
        </section>

        {/* Section 6 */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            6. Gestion des cookies
          </h2>
          <p>
            Ce site web n'utilise aucun cookie de traçage publicitaire ou d'analyse commerciale. Seuls des cookies strictement nécessaires au fonctionnement technique du site peuvent être déposés. Ces cookies techniques ne nécessitent pas de recueil de consentement préalable.
          </p>
        </section>
      </div>
    </main>
  );
}
