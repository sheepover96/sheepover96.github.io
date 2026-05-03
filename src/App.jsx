import React from 'react';
import icon from './assets/icon.png';

const profileItems = [
  { label: '所属', value: 'なし' },
  { label: '連絡先', value: 'sheep.over[at]gmail.com' },
  { label: '趣味', value: 'ノンフライヤー，マンガ，水泳' },
];

const educationRows = [
  ['2012 〜 2017', '長岡高専 電子制御工学科', '準学士'],
  ['2017 〜 2019', '筑波大学 情報科学類', '学士'],
  ['2019 〜 2022', '筑波大学大学院 CS専攻', '修士'],
];

const publications = [
  ['Maiki Okura, Toshiyuki Amagasa,', '"Predicting Knowledge Graph Updates from Edit Histories",', 'iiWAS 2024'],
  ['大倉真一希, 天笠俊之,', '"知識グラフにおける更新エンティティの予測",', 'DEIM 2022'],
  ['大倉真一希，伊藤凌平，大内正己，天笠俊之，北川博之,', '"畳み込みニューラルネットを用いたすばる望遠鏡Hyper Suprime-Camによる遠方銀河Lyman-alpha emitterの観測データの自動分類",', 'DEIM 2019'],
  ['大倉真一希，伊藤凌平，大内正己，天笠俊之，北川博之,', '"畳み込みニューラルネットワークを用いたすばる望遠鏡によるLyman-alpha Emitter観測データの自動分類",', 'IPSJ 2019'],
];

const workSections = [
  {
    title: '自営業',
    headers: ['Period', 'Company', 'Job'],
    rows: [
      ['2025 Sep 〜 ', '株式会社BONGA', '代表'],
      ['2025 Jun 〜 ', 'フリーランスエンジニア', 'フルスタックエンジニア'],
    ],
  },
  {
    title: 'フルタイム',
    headers: ['Period', 'Company', 'Job'],
    rows: [
      ['2024 Aug 〜 2025 Jun', '株式会社ABEJA', 'SE (Backend, Frontend, Infra)'],
      ['2022 Apr 〜 2024 Aug', '株式会社ミクシィ みてね事業部', 'SE (Backend, iOS, Android)'],
    ],
  },
  {
    title: 'パートタイム',
    headers: ['Period', 'Company', 'Job'],
    rows: [
      ['2025 Jun 〜 ', '豊玉香料株式会社', '貿易事務・DX支援'],
    ],
  },
  {
    title: '業務委託',
    headers: ['Period', 'Company', 'Job'],
    rows: [
      ['2024 June 〜 2024 Aug', '株式会社SPARQ', 'SE (Backend, Frontend)'],
      ['2020 Nov 〜 2021 Dec', '株式会社V chuu', 'SE (Infra, Backend, Frontend, ReactNative)'],
    ],
  },
  {
    title: 'バイト・インターン',
    headers: ['Period', 'Company', 'Job'],
    rows: [
      ['2020 Jan 〜', '株式会社スリーシェイク', 'SE (Infra, Backend, Frontend)'],
      ['2019 Oct 〜 Nov', '株式会社プレイド', 'SE (Backend, Frontend)'],
      ['2018 Mar 〜 Dec', 'フラー株式会社', 'SE (Data infra, Frontend)'],
    ],
  },
  {
    title: 'TA',
    headers: ['Period', 'Class'],
    rows: [
      ['2020 Oct 〜 2021 Feb', 'データ構造とアルゴリズム'],
      ['2019 Apr 〜 Aug', 'データ構造とアルゴリズム'],
      ['2019 Apr 〜 Jul', 'データベース概論I'],
    ],
  },
];

const socialLinks = [
  ['https://github.com/sheepover96/', 'fab fa-github fa-lg', 'GitHub'],
  ['https://www.linkedin.com/in/%E7%9C%9F%E4%B8%80%E5%B8%8C-%E5%A4%A7%E5%80%89-a17397149/?locale=en_US', 'fab fa-linkedin-in fa-lg', 'LinkedIn'],
  ['https://www.facebook.com/profile.php?id=100014972891268', 'fab fa-facebook fa-lg', 'Facebook'],
  ['https://twitter.com/LovelyQuoteBot', 'fab fa-twitter fa-lg', 'Twitter'],
  ['https://serenard.hatenablog.com/', 'fa fa-rss', 'Blog'],
  ['https://drive.google.com/open?id=11ixcpV4PIs-wwdbG0yKlvEVeE0yifK0-', 'fas fa-file', 'File'],
];

const navigationItems = [
  ['#profile', 'Profile'],
  ['#education', 'Education'],
  ['#publication', 'Publication'],
  ['#work-exp', 'Work exp.'],
  ['#skills', 'Skills'],
];

function Section({ id, title, children }) {
  return (
    <section id={id} className="section">
      <div className="container normal-width">
        <div className="section-title">{title}</div>
        <hr />
        {children}
        <hr />
      </div>
    </section>
  );
}

function SocialLinks() {
  return (
    <div className="logo-bar">
      {socialLinks.map(([href, iconClass, label]) => (
        <a key={href} target="_blank" rel="noreferrer" href={href} className="logo" aria-label={label}>
          <i className={iconClass}></i>
        </a>
      ))}
    </div>
  );
}

function DataTable({ headers, rows, className = '' }) {
  return (
    <div className="table-container">
      <table align="center" className={`table ${className}`.trim()}>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={`${row[0]}-${rowIndex}`}>
              {row.map((value, cellIndex) => (
                <td key={`${value}-${cellIndex}`}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function App() {
  return (
    <div className="app">
      <div className="page-title section">
        <img src={icon} height="100" width="100" alt="Profile icon" />
        <p className="hero-title">OKURA Maiki&apos;s homepage</p>
      </div>

      <div className="container normal-width">
        <SocialLinks />
        <div className="columns center navigation-bar">
          {navigationItems.map(([href, label]) => (
            <div key={href} className="column">
              <a href={href}>{label}</a>
            </div>
          ))}
        </div>
      </div>

      <hr />

      <Section id="profile" title="Profile">
        {profileItems.map((item) => (
          <div key={item.label} className="element">
            <div className="section-subtitle">[ {item.label} ]</div>
            <div className="item">{item.value}</div>
          </div>
        ))}
      </Section>

      <Section id="education" title="Education">
        <DataTable headers={['Year', 'School', 'Course']} rows={educationRows} />
      </Section>

      <Section id="work-exp" title="Work Experiences">
        {workSections.map((section) => (
          <div key={section.title} className="element">
            <div className="section-subtitle">[ {section.title} ]</div>
            <DataTable headers={section.headers} rows={section.rows} className="work-table" />
          </div>
        ))}
      </Section>

      <Section id="publication" title="Publication">
        <div className="element">
          <div className="section-subtitle">[ 国内会議 査読なし ]</div>
          <div className="content">
            <ol type="1">
              {publications.map(([authors, title, venue]) => (
                <li key={`${authors}-${venue}`}>
                  <span>{authors} </span>
                  <span>{title} </span>
                  <span>{venue}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>


      <Section id="skills" title="Skills">
        <div className="element">
          <div className="section-subtitle">[ Basic ]</div>
          <div className="content">日本語, 英語 (toeic 830), 水泳, 普通自動車免許</div>
        </div>
        <div className="element">
          <div className="section-subtitle">[ Programming ]</div>
          <div className="content">
            <div className="table-container table-margin">
              <table className="table">
                <tbody>
                  <tr>
                    <th>Language</th>
                    <td>Python, Golang, JavaScript, Java, etc</td>
                  </tr>
                  <tr>
                    <th>Application</th>
                    <td>React, Next.js, Rails, etc</td>
                  </tr>
                  <tr>
                    <th>Infra</th>
                    <td>GCP, Terraform, AWS</td>
                  </tr>
                  <tr>
                    <th>Middleware</th>
                    <td>Docker, k8s(helm, Argo), MySQL, Nginx, etc</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Section>

      <footer className="footer has-background-white">
        <div className="content has-text-centered">
          <p>@2019-2026 Maiki OKURA</p>
          <div className="logo-bar">
            links:
            <SocialLinks />
          </div>
        </div>
      </footer>
    </div>
  );
}
