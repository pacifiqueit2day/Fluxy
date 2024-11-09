export default function isJSON(str) {
          try {
                    return (JSON.parse(str) && !!str);
          } catch (e) {
                    return false;
          }
}