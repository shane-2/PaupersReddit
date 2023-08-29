export interface Aitah {
    kind: string;
    data: AITAHData;
}

export interface AITAHData {
    after:      string;
    dist:       number;
    modhash:    string;
    geo_filter: null;
    children:   Child[];
    before:     null;
}

export interface Child {
    kind: Kind;
    data: ChildData;
}

export interface ChildData {
    approved_at_utc:               null;
    subreddit:                     Subreddit;
    selftext:                      string;
    author_fullname:               string;
    saved:                         boolean;
    mod_reason_title:              null;
    gilded:                        number;
    clicked:                       boolean;
    title:                         string;
    link_flair_richtext:           LinkFlairRichtext[];
    subreddit_name_prefixed:       SubredditNamePrefixed;
    hidden:                        boolean;
    pwls:                          number;
    link_flair_css_class:          null | string;
    downs:                         number;
    thumbnail_height:              number | null;
    top_awarded_type:              null;
    hide_score:                    boolean;
    name:                          string;
    quarantine:                    boolean;
    link_flair_text_color:         LinkFlairTextColor | null;
    upvote_ratio:                  number;
    author_flair_background_color: null;
    subreddit_type:                SubredditType;
    ups:                           number;
    total_awards_received:         number;
    media_embed:                   Gildings;
    thumbnail_width:               number | null;
    author_flair_template_id:      null;
    is_original_content:           boolean;
    user_reports:                  any[];
    secure_media:                  Media | null;
    is_reddit_media_domain:        boolean;
    is_meta:                       boolean;
    category:                      null;
    secure_media_embed:            Gildings;
    link_flair_text:               null | string;
    can_mod_post:                  boolean;
    score:                         number;
    approved_by:                   null;
    is_created_from_ads_ui:        boolean;
    author_premium:                boolean;
    thumbnail:                     string;
    edited:                        boolean | number;
    author_flair_css_class:        null;
    author_flair_richtext:         any[];
    gildings:                      Gildings;
    content_categories:            null;
    is_self:                       boolean;
    mod_note:                      null;
    created:                       number;
    link_flair_type:               AuthorFlairType;
    wls:                           number;
    removed_by_category:           null;
    banned_by:                     null;
    author_flair_type:             AuthorFlairType;
    domain:                        Domain;
    allow_live_comments:           boolean;
    selftext_html:                 null | string;
    likes:                         null;
    suggested_sort:                null | string;
    banned_at_utc:                 null;
    view_count:                    null;
    archived:                      boolean;
    no_follow:                     boolean;
    is_crosspostable:              boolean;
    pinned:                        boolean;
    over_18:                       boolean;
    all_awardings:                 AllAwarding[];
    awarders:                      any[];
    media_only:                    boolean;
    can_gild:                      boolean;
    spoiler:                       boolean;
    locked:                        boolean;
    author_flair_text:             null;
    treatment_tags:                any[];
    visited:                       boolean;
    removed_by:                    null;
    num_reports:                   null;
    distinguished:                 null;
    subreddit_id:                  SubredditID;
    author_is_blocked:             boolean;
    mod_reason_by:                 null;
    removal_reason:                null;
    link_flair_background_color:   LinkFlairBackgroundColor;
    id:                            string;
    is_robot_indexable:            boolean;
    report_reasons:                null;
    author:                        string;
    discussion_type:               null | string;
    num_comments:                  number;
    send_replies:                  boolean;
    whitelist_status:              WhitelistStatus;
    contest_mode:                  boolean;
    mod_reports:                   any[];
    author_patreon_flair:          boolean;
    author_flair_text_color:       null;
    permalink:                     string;
    parent_whitelist_status:       WhitelistStatus;
    stickied:                      boolean;
    url:                           string;
    subreddit_subscribers:         number;
    created_utc:                   number;
    num_crossposts:                number;
    media:                         Media | null;
    is_video:                      boolean;
    link_flair_template_id?:       string;
    is_gallery?:                   boolean;
    media_metadata?:               { [key: string]: MediaMetadatum };
    gallery_data?:                 GalleryData;
    url_overridden_by_dest?:       string;
    post_hint?:                    string;
    preview?:                      Preview;
}

export interface AllAwarding {
    giver_coin_reward:                    null;
    subreddit_id:                         null;
    is_new:                               boolean;
    days_of_drip_extension:               null;
    coin_price:                           number;
    id:                                   string;
    penny_donate:                         null;
    award_sub_type:                       string;
    coin_reward:                          number;
    icon_url:                             string;
    days_of_premium:                      null;
    tiers_by_required_awardings:          null;
    resized_icons:                        ResizedIcon[];
    icon_width:                           number;
    static_icon_width:                    number;
    start_date:                           null;
    is_enabled:                           boolean;
    awardings_required_to_grant_benefits: null;
    description:                          string;
    end_date:                             null;
    sticky_duration_seconds:              null;
    subreddit_coin_reward:                number;
    count:                                number;
    static_icon_height:                   number;
    name:                                 string;
    resized_static_icons:                 ResizedIcon[];
    icon_format:                          null | string;
    icon_height:                          number;
    penny_price:                          number | null;
    award_type:                           string;
    static_icon_url:                      string;
}

export interface ResizedIcon {
    url:    string;
    width:  number;
    height: number;
}

export enum AuthorFlairType {
    Richtext = "richtext",
    Text = "text",
}

export enum Domain {
    RedditCOM = "reddit.com",
    SelfAITAH = "self.AITAH",
    VReddIt = "v.redd.it",
}

export interface GalleryData {
    items: Item[];
}

export interface Item {
    media_id: string;
    id:       number;
}

export interface Gildings {
}

export enum LinkFlairBackgroundColor {
    Empty = "",
    The7193Ff = "#7193ff",
}

export interface LinkFlairRichtext {
    e: AuthorFlairType;
    t: string;
}

export enum LinkFlairTextColor {
    Dark = "dark",
}

export interface Media {
    reddit_video: RedditVideo;
}

export interface RedditVideo {
    bitrate_kbps:       number;
    fallback_url:       string;
    height:             number;
    width:              number;
    scrubber_media_url: string;
    dash_url:           string;
    duration:           number;
    hls_url:            string;
    is_gif:             boolean;
    transcoding_status: string;
}

export interface MediaMetadatum {
    status: string;
    e:      string;
    m:      string;
    p:      P[];
    s:      S;
    id:     string;
}

export interface P {
    y: number;
    x: number;
    u: string;
}

export interface S {
    y:   number;
    gif: string;
    mp4: string;
    x:   number;
}

export enum WhitelistStatus {
    AllAds = "all_ads",
}

export interface Preview {
    images:  Image[];
    enabled: boolean;
}

export interface Image {
    source:      ResizedIcon;
    resolutions: ResizedIcon[];
    variants:    Gildings;
    id:          string;
}

export enum Subreddit {
    Aitah = "AITAH",
}

export enum SubredditID {
    T5446Kys = "t5_446kys",
}

export enum SubredditNamePrefixed {
    RAITAH = "r/AITAH",
}

export enum SubredditType {
    Public = "public",
}

export enum Kind {
    T3 = "t3",
}

