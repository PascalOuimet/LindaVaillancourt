import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Déroulement</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>Nous sommes tous confrontés à différents obstacles de la vie. Il nous arrive que ceux-ci nous paraissent insurmontables et d’autres fois nous avons l’impression que nous y arriverons plus facilement. Dans certains cas, il est nécessaire d’aller chercher de l’aide d’un professionnel.</p>
          <p>Le nombre de rencontres nécessaires peut grandement varier d’un besoin à l’autre. Il n’est donc pas toujours de mise que plusieurs rencontres soient nécessaires.</p>
          <p>Lors d’un suivi, nous élaborerons ensemble un plan d’intervention. Il ne faut surtout pas oublier que vous êtes le maître de votre propre vie. Il me sera donc possible de vous apporter de l’aide afin que vous puissiez vous fixer des objectifs dont VOUS déciderez. Jamais ces objectifs seront irréalistes ou inatteignables. Le but étant d’améliorer votre mieux-être.</p>
          <p>Les rencontres se déroulent de façon dynamique. De plus, les entrevues peuvent se dérouler en individuel, en couple ou encore avec des membres de la famille. Les rencontres se font généralement à mon bureau ou encore dans votre milieu de vie s’il vous est difficile de vous déplacer. Je vous propose aussi des consultations téléphoniques ou encore par vidéo conférence.</p>
          <p>Lors des suivis psychosociaux, j’utilise quelques approches, mais les deux plus présentes sont les suivantes :
            <ul>
              <li><strong>Approche orientée vers les solutions</strong> : Cette approche vous permettra de vous centrer rapidement vers des solutions vous permettant de développer les stratégies dont vous utilisez déjà de façon naturelle. Vos forces seront donc utilisées afin d’évoluer dans votre processus de changement.</li>
              <li><strong>Approche cognitivo-comportementale</strong> : Cette approche vous permettra de changer certains comportements pouvant être souffrants pour vous. En travaillant vos pensées, il vous sera possible de changer vos comportements. Ainsi, il vous sera possible de vous ramener plus facilement au « ici et maintenant ». Cette approche est très populaire actuellement afin de diminuer les symptômes anxieux.</li>
            </ul>
          </p>
          <p>Pour en savoir plus sur le rôle des travailleurs sociaux, consultez le site de l’<a target="_blank" href="https://otstcfq.org">OTSTCFQ</a>.</p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Services</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <h3>Les services sont offerts aux adolescents, adultes et personnes âgées.</h3>
          <p>Il m’est possible de vous accompagner dans les contextes suivants :
            <ul>
              <li>Difficultés d’adaptation en lien avec la situation de pandémie (COVID-19)</li>
              <li>Dépression</li>
              <li>Anxiété</li>
              <li>Difficultés relationnelles</li>
              <li>Difficultés conjugales</li>
              <li>Conflits</li>
              <li>Problématiques vécues au travail</li>
              <li>Deuil</li>
              <li>Difficultés familiales</li>
              <li>Difficultés vécues avec les enfants (habiletés parentales)</li>
              <li>Maladie</li>
              <li>Affirmation de soi</li>
              <li>Estime de soi</li>
              <li>Adaptation</li>
              <li>Gestion des émotions</li>
              <li>Épuisement</li>
              <li>Séparation</li>
              <li>Idées suicidaires</li>
              <li>Autres</li>
            </ul>
          </p>
          <p>J’offre aussi le service d’évaluation psychosociale (mandat en cas d’inaptitude et ouverture de régime de protection).</p>
          <p>De plus, un service d’aide au niveau de la gestion des employés en entreprise est disponible. Encore, il m’est possible de me déplacer en entreprise lors de problématiques vécues ou pour un débriefing. Le debriefing est offert en cas de problématique ou encore afin d’améliorer la performance des équipes.</p>
          <p>Il est à noter, que je suis aussi affiliée avec plusieurs PAE (programmes d’aide aux employés) et que j’émets des reçus pour vos assurances.</p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">À propos</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>Je suis diplômée en éducation spécialisée et en travail social. Membre en règle de l’Ordre des travailleurs sociaux et thérapeutes conjugaux et familiaux du Québec (OTSTCFQ), j’ai exercé dans plusieurs milieux : organismes communautaires, milieu scolaire, en CLSC et dans mon bureau de pratique privée. Je cumule plus de 15 ans d’expérience en intervention.</p>
          <p>Mon travail m’a emmené à travailler avec plusieurs clientèles. Entre autres, j’ai de l’expérience avec les enfants, adolescents, adultes et personnes âgées. J’ai aussi eu la grande chance d’aller travailler avec les Inuits. Aussi, ma présence en entreprise lors de débriefing a su aider des employés à surmonter certaines difficultés. De ce fait, je suis actuellement à l’UDEM en gestion afin d’aller chercher tous les outils nécessaires aux entreprises.</p>
          <p>Durant ce parcours professionnel, j’ai eu le plaisir de pratiquer en tant que coordonnatrice clinique avec une équipe en CLSC. Durant cette expérience professionnelle, j’ai su m’adapter de façon régulière et mettre à profit mes forces et celles de mon équipe permettant ainsi de grandement diminuer les listes d’attente et d’offrir un meilleur service aux usagers.</p>
          <p>Ma grande soif d’apprendre et ma curiosité intellectuelle font en sorte que je sois très polyvalente et que je vais toujours chercher des formations supplémentaires afin d’améliorer ma pratique.</p>
          <p>Étant une personne chaleureuse, à l’écoute et empathique, je suis disponible pour vous aider à améliorer votre mieux-être et votre cheminement personnel/professionnel.</p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <p>Mon bureau est situé au 98, rue Champlain à Salaberry-de-Valleyfield. Il vous est possible de me contacter pour un rendez-vous au 450-807-2449.</p>
          <p>Les modes de paiement sont par transfert Interac ou en argent (montant exact).</p>
          <form method="post" data-netlify="true" name="contact" action="/success">
            <div className="field half first">
              <label htmlFor="name">Nom</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="phone">Téléphone</label>
              <input type="text" name="phone" id="phone" />
            </div>
            <div className="field half">
              <label htmlFor="email">Courriel</label>
              <input type="email" name="email" id="email" />
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
          {close}
        </article>
      </div>
    )
  }
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
