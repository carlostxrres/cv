export type Lang = "en" | "ca" | "es";

export type Labels = {
  readonly documentTitle: string;
  /** BCP 47 locale used to format dates for this language */
  readonly dateLocale: string;
  /** Prefix of the "last updated" line; the formatted date is appended */
  readonly lastUpdatedOn: string;
  readonly seeInGithub: string;
  readonly seeAsPdf: string;
  readonly pictureAlt: string;
  readonly sections: {
    readonly aboutMe: string;
    readonly education: string;
    readonly work: string;
    readonly skills: string;
    readonly languages: string;
    readonly projects: string;
    readonly projectsIntro: string;
    readonly volunteering: string;
  };
};
