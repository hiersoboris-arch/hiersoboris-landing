/**
 * Choisit la classe d'un sur-titre selon sa longueur.
 *
 * Le design system BHA interdit la capitale au-dela de trois mots : au-dela, le
 * mot perd sa silhouette et se dechiffre lettre a lettre, ce qui est exactement
 * le cout que paie un lecteur dyslexique. La regle ne peut pas vivre dans le CSS
 * (on n'y compte pas les mots) ni dans une classe posee a la main (le jour ou un
 * libelle s'allonge, personne ne repasse derriere). Elle vit donc ici, appliquee
 * a la valeur reelle, au moment du rendu.
 *
 * Les separateurs (· & -) et les entites ne comptent pas comme des mots.
 */
export function kickerClass(texte: string | null | undefined): string {
  const mots = (texte ?? "").match(/[0-9A-Za-zÀ-ÿ']+/g) ?? [];
  return mots.length > 3 ? "kicker kicker-long" : "kicker";
}
