export type Cv = {
  readonly name: string;
  readonly lastName: string;
  readonly title: string;
  readonly aboutMe: string;
  readonly contactDetails: ContactDetail[];
  readonly education: Education[];
  readonly projects: Project[];
  readonly work: Work[];
  readonly languages: ContactDetail[];
  readonly volunteering: Volunteering[];
  readonly skills: Tag[];
};

export type ContactDetail = {
  readonly label: string;
  readonly value: Link | string;
};

export type Education = {
  readonly institution: string;
  readonly title: string;
  readonly period: string;
  readonly link?: Link;
  readonly description: string;
  readonly tags?: Tag[];
};

export type Link = {
  readonly text: string;
  readonly url: string;
};

export type Project = {
  readonly title: string;
  readonly description: string;
  readonly tags: Tag[];
  readonly link: Link;
};

export type Volunteering = {
  readonly title: string;
  readonly institution: string;
  readonly location?: string;
  readonly period: string;
  readonly description: string;
};

export type Work = {
  readonly title: string;
  readonly institution: string;
  readonly period: string;
  readonly description: string;
  readonly bulletPoints?: string[];
  readonly tags?: Tag[];
  readonly location?: string;
};

export type Tag = string;
