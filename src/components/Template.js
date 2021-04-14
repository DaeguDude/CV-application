import React from 'react';

class Template extends React.Component {
  render() {
    const { personal, work, education } = this.props;

    return (
      <div className="template">
        <TemplateName
          firstName={personal.firstName}
          lastName={personal.lastName}
        />
        <PersonalTemplateSection name="Personal" history={personal} />
        <TemplateSection name="Work Experiences" history={work.history} />
        <TemplateSection name="Education" history={education.history} />
      </div>
    );
  }
}

class TemplateName extends React.Component {
  render() {
    return (
      <h1 className="template__name">
        {this.props.firstName} {this.props.lastName}
      </h1>
    );
  }
}

class PersonalTemplateSection extends React.Component {
  render() {
    const personal = this.props.history;

    return (
      <div className="template__section template__section--personal">
        <TemplateSectionHeader name="Personal" />
        <div className="template__section--personal--main">
          <div className="template__section--personal--row">
            <span class="personal__label">Name</span>
            <p class="personal__info">
              {personal.firstName} {personal.lastName}
            </p>
          </div>

          <div className="template__section--personal--row">
            <span class="personal__label">Address</span>
            <p class="personal__info">
              {personal.address}, {personal.zipCode} {personal.city}
            </p>
          </div>

          <div className="template__section--personal--row">
            <span class="personal__label">Phone Number</span>
            <p class="personal__info">{personal.phoneNumber}</p>
          </div>

          <div className="template__section--personal--row">
            <span class="personal__label">Email</span>
            <p class="personal__info">{personal.email}</p>
          </div>
        </div>
      </div>
    );
  }
}

class TemplateSection extends React.Component {
  render() {
    return (
      <div className="template__section">
        <TemplateSectionHeader name={this.props.name} />
        <TemplateSectionMain
          name={this.props.name}
          history={this.props.history}
        />
      </div>
    );
  }
}

class TemplateSectionHeader extends React.Component {
  render() {
    return (
      <div className="template__section--header">
        <h3 className="template__section--title">{this.props.name}</h3>
      </div>
    );
  }
}

class TemplateSectionMain extends React.Component {
  render() {
    const history = this.props.history;

    return (
      <div className="template__section--main">
        {history.map((info) => {
          if (getSectionName(this.props.name) === 'Work') {
            return (
              <TemplateSectionRow
                title={info.jobTitle}
                subTitle={info.employer}
                history={info}
              />
            );
          } else {
            return (
              <TemplateSectionRow
                title={info.degree}
                subTitle={info.school}
                history={info}
              />
            );
          }
        })}
      </div>
    );
  }
}

class TemplateSectionRow extends React.Component {
  render() {
    const {
      city,
      startMonth,
      startYear,
      endMonth,
      endYear,
      description,
    } = this.props.history;

    const title = this.props.title;
    const subTitle = this.props.subTitle;

    return (
      <div className="template__section--row">
        <div className="template__info-header">
          <div className="template__info-title">{title}</div>
          <div className="template__info-date">
            {startMonth} {startYear} - {endMonth} {endYear}
          </div>
        </div>
        <div className="template__info-subtitle">
          {subTitle}, {city}
        </div>
        <p className="template__info-text">{description}</p>
      </div>
    );
  }
}

function getSectionName(str) {
  if (str === 'Work Experiences') {
    return 'Work';
  }

  if (str === 'Education') {
    return str;
  }
}

export default Template;
