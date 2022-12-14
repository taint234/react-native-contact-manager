import {Platform} from 'react-native';

/**
 * @description Checking platform
 */
export const isIos = Platform.OS === 'ios';

/**
 * @description Remove vietnamese accent
 */
export const removeAccent = str => {
  const from =
    'àáãảạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệđùúủũụưừứửữựòóỏõọôồốổỗộơờớởỡợìíỉĩịäëïîöüûñçýỳỹỵỷ';
  const to =
    'aaaaaaaaaaaaaaaaaeeeeeeeeeeeduuuuuuuuuuuoooooooooooooooooiiiiiaeiiouuncyyyyy';

  for (let i = 0; i < from.length; i++) {
    str = str?.replace(RegExp(from[i], 'gi'), to[i]);
  }

  str = str
    ?.toLowerCase()
    .trim()
    .replace(/[^a-z0-9-]/g, '-')
    .replace(/-+/g, '-');

  return str;
};

/**
 * @description Convert fullname into 2 character
 * @param {string} fullName
 */
export const shortenName = fullName => {
  const ar = fullName.trim().split(' ');

  if (ar.length > 1) {
    return `${ar[0].slice(0, 1)}${ar[ar.length - 1].slice(0, 1)}`.toUpperCase();
  }

  return ar[0].slice(0, 1).toUpperCase();
};

export const convertToSectionList = data => {
  return data.reduce((list, obj) => {
    let existObj = list.find(e => e.title === obj.displayName.charAt(0));
    if (existObj) {
      existObj.data.push(obj);
    } else {
      list.push({
        title: obj.displayName.charAt(0),
        data: [{...obj, isFavorite: false}],
      });
    }

    return list.sort((a, b) => a.title.localeCompare(b.title));
  }, []);
};
