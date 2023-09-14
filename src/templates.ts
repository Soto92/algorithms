// Challenge 3 of https://github.com/diegopacheco/tech-resources/blob/master/react-native-resources.md#ooad-challenges---round-1
interface Template {
    render(): string;
}

class HtmlTemplate implements Template {
    private content: string;
    constructor(content: string) {
        this.content = content;
    }
    render(): string {
        return `<html><body>${this.content}</body></html>`;
    }
}

class PdfTemplate implements Template {
    private content: string;
    constructor(content: string) {
        this.content = content;
    }
    render(): string {
        return `PDF: ${this.content}`;
    }
}

class CsvTemplate implements Template {
    private content: string;
    constructor(content: string) {
        this.content = content;
    }
    render(): string {
        return `CSV: ${this.content}`;
    }
}

class Renderer {
    render(format: string, content: string): string {
        let template: Template;
        switch (format) {
            case "HTML":
                template = new HtmlTemplate(content);
                break;
            case "PDF":
                template = new PdfTemplate(content);
                break;
            case "CSV":
                template = new CsvTemplate(content);
                break;
            default:
                throw new Error("Unsupported format: " + format);
        }
        return template.render();
    }
}

// Usage example:
const content = 'This is the content: My name is Mauricio Soto';
const renderer = new Renderer();

console.log(renderer.render("HTML", content)); // Render HTML
console.log(renderer.render("PDF", content));  // Render PDF
console.log(renderer.render("CSV", content));  // Render CSV