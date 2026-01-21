import { Link, LinkName, LinkUrl, Wrapper, NA } from "./styled";

export const RepoLinks = ({ link }) => {
    return (
        <Wrapper>
            <Link>
                <LinkName>Code:</LinkName>
                {link.html_url ? (
                    <LinkUrl href={link.html_url} target="_blank" rel="noopener noreferrer">
                        {link.html_url}
                    </LinkUrl>
                ) : (
                    <NA>N/A</NA>
                )}
            </Link>
            <Link>
                <LinkName>Demo:</LinkName>
                {link.homepage ? (
                    <LinkUrl href={link.homepage} target="_blank" rel="noopener noreferrer">
                        {link.homepage}
                    </LinkUrl>
                ) : (
                    <NA>N/A</NA>
                )}
            </Link>
        </Wrapper>
    );
};