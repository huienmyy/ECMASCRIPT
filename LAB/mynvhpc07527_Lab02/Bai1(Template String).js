const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"],
};

function makeList(arr) {
    const failureItems = arr.map(
      (element) => `<li class="text-warning">${element}</li>`
    );

  // const failureItems = [];

  // arr.forEach((element) => {
  //   failureItems.push(`<li class="text-warning">${element}</li>`);
  // });

  
  return failureItems;
}

const failureslist = makeList(result.failure);
console.log(failureslist.join("\n"));
