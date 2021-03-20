import signBunny from 'sign-bunny';

export function getSignBunnyMsg(text) {
  return signBunny(text);
}