
export const addSkill = (st: studentType, skill: string) => {
  st.technologies.push({
    id: new Date().getTime(),
    title: skill,
  });
};
