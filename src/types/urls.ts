export type AnalysisData = {
    title: string;
    description: string;
    sourceUrl: string;
    destinationUrl: string;
    redirects: AnalyzedUrlRedirect[];
};

export interface AnalyzedUrlRedirect {
    rawUrl: string;
    meta?: AnalyzedUrlRedirectMetadata;
}

export interface AnalyzedUrlRedirectMetadata {
    title?: string;
    description?: string;
}