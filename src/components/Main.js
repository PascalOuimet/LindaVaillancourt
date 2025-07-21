import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import { StaticImage } from "gatsby-plugin-image"

const Main = props => {

  useEffect(() => {
    const handleKeyDown = ev => ev.key === 'Escape' ? props.onCloseArticle() : null;
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [props]);

  const close = (
    <div
      role="button"
      aria-label="close"
      tabIndex={0}
      className="close"
      onKeyDown={props.onCloseArticle}
      onClick={props.onCloseArticle}
    ></div>
  );

  const timeoutClass = props.articleTimeout ? 'timeout' : ''

  const getArticleClass = article => `${props.article === article ? 'active' : ''} ${timeoutClass}`

  return (
    <div
      ref={props.setWrapperRef}
      id="main"
      style={{ display: props.timeout ? 'flex' : 'none' }}
    >
      <article
        id="intro"
        className={getArticleClass('intro')}
        style={{ display: 'none' }}
      >
        <h2 className="major">Déroulement</h2>
        <div className="image main">
          <StaticImage src="../images/pic01.jpg" alt="Déroulement" />
        </div>
        <p>Nous sommes tous confrontés à différents obstacles de la vie. Parfois, nous avons l'impression que nous y arriverons facilement, mais à d'autres moments ceux-ci peuvent nous paraître insurmontables. Dans certains cas, il est nécessaire d’aller chercher de l’aide d’un professionnel.</p>
        <p>Le nombre de rencontres peut grandement varier d’un besoin à l’autre. Il n’est donc pas toujours de mise que plusieurs rencontres soient nécessaires.</p>
        <p>Lors d’un suivi, nous élaborerons ensemble un plan d’intervention. Il ne faut surtout pas oublier que vous êtes le maître de votre propre vie. Il me sera donc possible de vous apporter de l’aide afin que vous puissiez vous fixer des objectifs dont VOUS déciderez. Jamais ces objectifs seront irréalistes ou inatteignables. Le but étant d’améliorer votre mieux-être.</p>
        <p>Les rencontres se déroulent de façon dynamique. De plus, les entrevues peuvent se dérouler en individuel, en couple ou encore avec des membres de la famille. Les rencontres se font généralement à mon bureau ou encore dans votre milieu de vie s’il vous est difficile de vous déplacer. Je vous propose aussi des consultations téléphoniques ou encore par vidéo conférence.</p>
        <p className="ulPrefix">Lors des suivis psychosociaux, j’utilise plusieurs approches.</p>
        <ul>
          <li><strong>Approche orientée vers les solutions</strong> : Cette approche vous permettra de vous centrer rapidement vers des solutions vous permettant de développer les stratégies dont vous utilisez déjà de façon naturelle. Vos forces seront donc utilisées afin d’évoluer dans votre processus de changement.</li>
          <li><strong>Techniques reliées à l'approche cognitivo-comportementale</strong> : Ces techniques vous apporteront des moyens concrets. Ainsi, il vous sera possible de vous ramener plus facilement au « ici et maintenant ». Ces techniques sont très populaires actuellement afin de diminuer les symptômes anxieux.</li>
        </ul>
        <p>Pour en savoir plus sur le rôle des travailleurs sociaux, consultez le site de l’<a target="_blank" rel="noreferrer" href="https://otstcfq.org">OTSTCFQ</a>.</p>
        {close}
      </article>

      <article
        id="work"
        className={getArticleClass('work')}
        style={{ display: 'none' }}
      >
        <h2 className="major">Services</h2>
        <div className="image main">
          <StaticImage src="../images/pic02.jpg" alt="Services" />
        </div>
        <h3>Les services sont offerts aux adolescents, adultes et personnes âgées.</h3>
        <p className="ulPrefix">Il m’est possible de vous accompagner dans les contextes suivants :</p>
        <ul>
          <li>Dépression</li>
          <li>Anxiété</li>
          <li>Difficultés relationnelles</li>
          <li>Difficultés conjugales</li>
          <li>Conflits</li>
          <li>Problématiques vécues au travail</li>
          <li>Deuil</li>
          <li>Difficultés familiales</li>
          <li>Maladie</li>
          <li>Affirmation de soi</li>
          <li>Estime de soi</li>
          <li>Adaptation</li>
          <li>Gestion des émotions</li>
          <li>Épuisement</li>
          <li>Séparation</li>
          <li>Idées suicidaires</li>
          <li>Évaluation psychosociale dans le cadre de l'homologation d'un mandat de protection</li>
          <li>Autres</li>
        </ul>
        <p>Il m'est possible de vous offrir des rencontres en personne, par Teams et par téléphone</p>
        <p>Je suis aussi affiliée avec plusieurs PAE (programmes d’aide aux employés) et j’émets des reçus pour vos assurances.</p>
        {close}
      </article>

      <article
        id="about"
        className={getArticleClass('about')}
        style={{ display: 'none' }}
      >
        <h2 className="major">À propos</h2>
        <div className="image main">
          <StaticImage src="../images/LindaAbout.jpg" alt="Linda Vaillancourt" quality={100} />
        </div>
        <p>Je suis diplômée en éducation spécialisée et en travail social. Membre en règle de l’Ordre des travailleurs sociaux et thérapeutes conjugaux et familiaux du Québec (OTSTCFQ), j’ai exercé dans plusieurs milieux : organismes communautaires, milieu scolaire, en CLSC et dans mon bureau de pratique privée. Je cumule plus de 20 ans d’expérience en intervention.</p>
        <p>Mon travail m’a amené à travailler avec une clientèle très variée. J’ai aussi eu la grande chance d’aller travailler avec les Inuits. Aussi, ma présence en entreprise lors de débriefing a su aider des employés à surmonter certaines difficultés. De ce fait, je poursuis actuellement une formaion à l’UDEM en gestion afin d’aller chercher tous les outils nécessaires aux entreprises.</p>
        <p>Durant ce parcours professionnel, j’ai eu le plaisir de pratiquer en tant que coordonnatrice clinique avec une équipe en CLSC. J’ai su m’adapter de façon régulière et mettre à profit mes forces et celles de mon équipe permettant ainsi de grandement diminuer les listes d’attente et d’offrir un meilleur service aux usagers.</p>
        <p>Ma grande soif d’apprendre et ma curiosité intellectuelle font en sorte que je sois très polyvalente et que je vais toujours chercher des formations supplémentaires afin d’améliorer ma pratique.</p>
        <p>Étant une personne chaleureuse, à l’écoute et empathique, je suis disponible pour vous aider à améliorer votre mieux-être et votre cheminement personnel/professionnel.</p>
        {close}
      </article>

      <article
        id="contact"
        className={getArticleClass('contact')}
        style={{ display: 'none' }}
      >
        <h2 className="major">Contact</h2>
        <p>Il vous est possible de me contacter pour un rendez-vous au 450-807-2449.</p>
        <p>Les modes de paiement sont par transfert Interac ou en argent (montant exact).</p>
        <form method="post" data-netlify="true" name="contact" action="/success">
          <div className="field half first">
            <label htmlFor="name">Nom</label>
            <input type="text" name="name" id="name" autoComplete='name' />
          </div>
          <div className="field half">
            <label htmlFor="phone">Téléphone</label>
            <input type="tel" name="phone" id="phone" autoComplete='tel' />
          </div>
          <div className="field half">
            <label htmlFor="email">Courriel</label>
            <input type="email" name="email" id="email" autoComplete='email' />
          </div>
          <div className="field half">
            <label htmlFor="voicemail">Acceptez-vous que je vous laisse un message sur votre boîte vocale?</label>
            <input type="checkbox" name="voicemail" id="voicemail" />
          </div>
          <div className="field message">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="4"></textarea>
          </div>
          <p className="actions">
            <button type="submit" className="special">Envoyer</button>
          </p>
          <input type="hidden" name="subject" value="Pratique autonome" />
          <input type="hidden" name="form-name" value="contact" />
        </form>
        <ul className="icons">
          <li><a href="https://www.linkedin.com/in/linda-vaillancourt-343871153" target="_blank" rel="noreferrer" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
        </ul>
        {close}
      </article>
    </div>
  )
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
