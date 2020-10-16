const { expect } = require("chai");
const { mergeCategories } = require("../merge-categories");

describe("mergeCategories()", () => {
  context("Using <li> tags", () => {
    const template = `
      <div>
        <ul>
          <!-- Content here -->
        </ul>
      </div>
    `;

    it("should return no <li>s for no categories", () => {
      //arrange
      let catagories = [];
      //act
      let list = mergeCategories(template, catagories, "li");
      //assert
      expect(list).to.include("<div>");
      expect(list).to.include("</div>");
      expect(list).to.include("<ul>");
      expect(list).to.include("</ul>");
      expect(list).to.not.include("<li>");
      expect(list).to.not.include("</li>");
      expect(list).to.not.include("<!-- Content here -->");
    });

    it("should return a single <li> for one category", () => {
      //arrange
      let categories = ["dog"];

      //act
      let list = mergeCategories(template, categories, "li");

      //assert
      expect(list).to.contain("<div>");
      expect(list).to.contain("</div>");
      expect(list).to.contain("<ul>");
      expect(list).to.contain("</ul>");
      expect(list).to.contain("<li>dog</li>");
      expect(list).to.not.contain("<!-- Content here -->");
    });

    it("should return an <li> for each category", () => {
      //arrange
      let categories = ["dog", "cat", "mouse"];

      //act
      let list = mergeCategories(template, categories, "li");

      //assert
      expect(list).to.contain("<div>");
      expect(list).to.contain("</div>");
      expect(list).to.contain("<ul>");
      expect(list).to.contain("</ul>");
      expect(list).to.contain("<li>dog</li>");
      expect(list).to.contain("<li>cat</li>");
      expect(list).to.contain("<li>mouse</li>");
      expect(list).to.not.contain("<!-- Content here -->");
    });
  });

  context("using <option> tags", () => {
    const template = `
      <div>
        <select>
          <!-- Content here -->
        </select>
      </div>
    `;

    it("should return no <option> for no categories", () => {
      let catagories = [];
      //act
      let list = mergeCategories(template, catagories, "option");
      //assert
      expect(list).to.include("<div>");
      expect(list).to.include("</div>");
      expect(list).to.include("<select>");
      expect(list).to.include("</select>");
      expect(list).to.not.include("<option>");
      expect(list).to.not.include("</option>");
      expect(list).to.not.include("<!-- Content here -->");
    });

    it("should return a single <option> for one category", () => {
      let catagories = ["dog"];
      //act
      let list = mergeCategories(template, catagories, "option");
      //assert
      expect(list).to.include("<div>");
      expect(list).to.include("</div>");
      expect(list).to.include("<select>");
      expect(list).to.include("</select>");
      expect(list).to.include("<option>dog</option>");
      expect(list).to.not.include("<!-- Content here -->");
    });

    it("should return an <option> for each category", () => {
      let catagories = ["dog", "cat", "mouse"];
      //act
      let list = mergeCategories(template, catagories, "option");
      //assert
      expect(list).to.include("<div>");
      expect(list).to.include("</div>");
      expect(list).to.include("<select>");
      expect(list).to.include("</select>");
      expect(list).to.include("<option>dog</option>");
      expect(list).to.include("<option>cat</option>");
      expect(list).to.include("<option>mouse</option>");
      expect(list).to.not.include("<!-- Content here -->");
    });
  });
});
